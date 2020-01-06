import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-tarea.css'
import axios from 'axios';

class contacto extends React.Component {

    constructor(){
        super();
        this.state={
            admins:[]
        }
    }

    componentDidMount(){
        
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Tareas", {
            titulo: document.getElementById("titulo").value,
            descripcion: document.getElementById("descripcion").value,
            prioridad: document.getElementById("prioridad").value,
            fecha: document.getElementById("fecha").value,
            encargado: "",
            estado: ""
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("titulo").value = ""
        document.getElementById("descipcion").value = ""
        document.getElementById("fecha").value = ""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card  carta619 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="titulo">Titulo</label>
                                        <input type="text" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Ingresa el titulo de la tarea" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion" >Descripcion</label>
                                        <textarea type="text" className="form-control" id="descripcion" placeholder="Ingresa la descripcion de la tarea" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="prioridad">Prioridad</label>
                                        <select className="form-control" id="prioridad">
                                            <option>Alta</option>
                                            <option>Media</option>
                                            <option>Baja</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha de vencimiento</label>
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
        );
    }
}

export default contacto;