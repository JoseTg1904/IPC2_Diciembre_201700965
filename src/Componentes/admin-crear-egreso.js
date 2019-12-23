import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';
var id = "";

class egreso extends React.Component {

    componentDidMount() {
        this.actualizadId()
    }

    actualizadId(){
        fetch("http://localhost:4000/Presupuesto/identificador")
        .then(res => res.json())
        .then(data => {
            id = data;
        });
    }

    obtenerDatos(e) {
        if (document.getElementById("ide").value === '') {
            axios.post("http://localhost:4000/Presupuesto/egresos", {
                concepto: document.getElementById("concepto").value,
                total: document.getElementById("total").value,
                fecha: document.getElementById("fecha").value,
                codigo:id
            }).then(function (response) {
                console.log(response);
                fetch("http://localhost:4000/Presupuesto/identificador")
                .then(res => res.json())
                .then(data => {
                    id = data;
                });
            });
            document.getElementById("concepto").value = ""
            document.getElementById("total").value = ""
            document.getElementById("fecha").value = ""
            document.getElementById("ide").value = ""
        }else{
            axios.post("http://localhost:4000/Presupuesto/egresos", {
            concepto: document.getElementById("concepto").value,
            total: document.getElementById("total").value,
            fecha: document.getElementById("fecha").value,
            codigo: document.getElementById("ide").value
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("concepto").value = ""
            document.getElementById("total").value = ""
            document.getElementById("fecha").value = ""
            document.getElementById("ide").value = ""
        }
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
                                        <label htmlFor="concepto">Descripcion</label>
                                        <input type="text" className="form-control" id="concepto" aria-describedby="emailHelp" placeholder="Ingresa la descripcion del egreso" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="total" >Total</label>
                                        <input type="text" className="form-control" id="total" placeholder="Ingresa el total" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha</label>
                                        <input type="text" className="form-control" id="fecha" placeholder="dd/mm/aaaa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ide">No. Factura</label>
                                        <input type="text" className="form-control" id="ide" placeholder="dd/mm/aaaa" />
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

export default egreso;