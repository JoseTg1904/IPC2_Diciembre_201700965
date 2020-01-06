import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-insumos.css'
import axios from 'axios';
var id = "";


class admin extends React.Component {

    constructor(){
        super();
        this.state={
            admins:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:4000/Crear_Bien/identificador").then(res =>{
            id = res.data
            console.log(id)
        })
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Crear_Bien", {
            codigo: id,
            tipo: document.getElementById("tipo").value,
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            cantidad: document.getElementById("cantidad").value,
            restante: document.getElementById("cantidad").value
        }).then(function (response) {
            console.log(response);
            axios.get("http://localhost:4000/Crear_Bien/identificador").then(res =>{
            id = res.data
            console.log(id)
        })
        });
        document.getElementById("tipo").value=""
        document.getElementById("nombre").value = ""
        document.getElementById("descripcion").value = ""
        document.getElementById("cantidad").value = ""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card carta696 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="tipo">Tipo</label>
                                        <select className="form-control" id="tipo">
                                            <option>Coffe break</option>
                                            <option>Almuerzo</option>
                                            <option>Insumo</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre" >Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa el nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion">Descripcion</label>
                                        <textarea className="form-control" id="descripcion"
                                            placeholder="Ingresa la descipcion" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input type="number" className="form-control" id="cantidad" placeholder="Ingresa la cantidad" />
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
        );
    }
}

export default admin;