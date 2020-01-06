import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';
var id = "";

class ingreso extends React.Component {

    componentDidMount() {
        //this.obtenerDatos();
        axios.get("http://localhost:4000/Presupuesto/identificador").then(res =>{
            id = res.data;
        })
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Presupuesto", {
            concepto: document.getElementById("concepto").value,
            total: Number(document.getElementById("total").value),
            fecha: document.getElementById("fecha").value,
            codigo: id
        }).then(function (response) {
            console.log(response);
            axios.get("http://localhost:4000/Presupuesto/identificador").then(res =>{
                id = res.data;
            })
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
                    <div className="card  text-white bg-primary carta5 mx-auto mb-3">
                        <div className="card-header">Ingreso</div>
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
                                        <input type="date" className="form-control" id="fecha" placeholder="dd/mm/aaaa" />
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

export default ingreso;