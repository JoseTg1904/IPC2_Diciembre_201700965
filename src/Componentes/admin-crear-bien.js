import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-bien.css'
import axios from 'axios';

class admin extends React.Component {

    constructor(){
        super();
        this.state={
            admins:[]
        }
    }

    componentDidMount(){
        this.obtenerAdmins();
    }

    obtenerAdmins(){
        fetch("http://localhost:4000/Crear_Admin/")
        .then(res => res.json())
        .then(data => {
            fetch("http://localhost:4000/Crear_Cola/")
            .then(res => res.json())
            .then(data1 => {
                var array = [];
                for(var i=0;i<data.length;i++){
                    array.push(data[i])
                }
                for(var i=0;i<data1.length;i++){
                    array.push(data1[i])
                }
                this.setState({ admins: array })
                console.log(this.state.admins)
            });
        });
    }

    obtenerDatos(e) {
        var seleccionados = [];
        for(var i=0;i<document.getElementById("encargados").length;i++){
            if(document.getElementById("encargados").options[i].selected === true ){
                seleccionados.push(" "+document.getElementById("encargados").options[i].value)
            }
        }
        axios.post("http://localhost:4000/Crear_Bien", {
            codigo: document.getElementById("codigo").value,
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            cantidad: document.getElementById("cantidad").value,
            encargados: seleccionados,
            ubicacion: document.getElementById("ubicacion").value,
            estado: document.getElementById("estado").value
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("codigo").value = ""
        document.getElementById("nombre").value = ""
        document.getElementById("descripcion").value = ""
        document.getElementById("cantidad").value = ""
        document.getElementById("encargados").value = ""
        document.getElementById("ubicacion").value = ""
        document.getElementById("estado").value = ""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card  carta mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="codigo">Codigo</label>
                                        <input type="text" className="form-control" id="codigo" aria-describedby="emailHelp" placeholder="Ingresa el codigo" />
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
                                        <input type="text" className="form-control" id="cantidad" placeholder="Ingresa la cantidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="encargados">Encargados</label>
                                        <select className="form-control multi-select"  multiple="multiple" 
                                        id="encargados">{
                                            this.state.admins.map( admin =>{
                                                return(
                                                    <option>{admin.nombre}</option>
                                                )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ubicacion">Ubicacion</label>
                                        <input type="text" className="form-control" id="ubicacion" placeholder="Ingresa la ubicacion" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="estado">Estado</label>
                                        <select className="form-control" id="estado">
                                            <option>Disponible</option>
                                            <option>No disponible</option>
                                        </select>
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