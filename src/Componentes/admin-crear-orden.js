import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';
var veri = false;
var id = "";

class orden extends React.Component {

    validarCarne(){
        console.log('presionado')
        var ruta = "http://localhost:4000/Crear_Estu/validar/" + document.getElementById("carne").value;
        console.log(ruta)
        axios.post(ruta,{
            hola:"hola"
        }).then(res =>{
            if(res.data === 1000){
                veri = true;
                console.log(veri)
                console.log('entre')
            }
        })
    }

    componentDidMount() {
        //this.obtenerDatos();
        axios.get("http://localhost:4000/Presupuesto/identificador").then(res =>{
            id = res.data;
        })
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Presupuesto", {
            concepto: document.getElementById("concepto").value,
            total: document.getElementById("total").value,
            fecha: document.getElementById("fecha").value,
            codigo: id
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("concepto").value = ""
        document.getElementById("total").value = ""
        document.getElementById("fecha").value = ""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card carta4 mx-auto mb-3 text-white bg-primary">
                            <div className="card-header">Validar</div>
                            <div className="card-body">
                                <label htmlFor="carne">Carne</label>
                                <input type="text" className="form-control" id="carne" aria-describedy="emailHelp" placeholder="Ingrese el numero de carnet a validar" />
                                <button type="button" onClick={this.validarCarne} className="btn btn-primary" >Validar</button>
                        </div>
                     </div>   
                    <div className="card  text-white bg-secondary carta5 mx-auto mb-3">
                        <div className="card-header">Orden de pago</div>
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="concepto">Concepto</label>
                                        <input type="text" className="form-control" id="concepto" aria-describedby="emailHelp" placeholder="Ingresa el concepto de pago" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="total" >Total</label>
                                        <input type="number" className="form-control" id="total" placeholder="Ingresa el total" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha</label>
                                        <input type="text" className="form-control" id="fecha" placeholder="dd/mm/aaaa" />
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Registrar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default orden;