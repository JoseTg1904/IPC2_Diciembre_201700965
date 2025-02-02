import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-contactos.css'
import axios from 'axios';
var nombre_ant = ""



class ContaMod extends React.Component {

    constructor() {
        super();
        this.state = {
            admins: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Crear_Conta/a/nick").then(function (response) {
            var ruta = "http://localhost:4000/Crear_Conta/bus/" + response.data;
            console.log(ruta + " " + response.data)
            axios.get(ruta, {
            }).then(function (result) {
                var info = result.data;
                nombre_ant = info.nombre;
                console.log(nombre_ant)
                document.getElementById("nombre").value = info.nombre
                document.getElementById("telefono").value = info.telefono
                document.getElementById("correo").value = info.correo
                document.getElementById("direccion").value = info.direccion
                document.getElementById("rol").value = info.rol
                document.getElementById("oportunidades").value = info.oportunidades
            })
        })
        this.obtenerAdmins();
    }

    obtenerAdmins() {
        fetch("http://localhost:4000/Crear_Admin/")
            .then(res => res.json())
            .then(data => {
                fetch("http://localhost:4000/Crear_Cola/")
                    .then(res => res.json())
                    .then(data1 => {
                        var array = [];
                        for (let i = 0; i < data.length; i++) {
                            array.push(data[i])
                        }
                        for (let i = 0; i < data1.length; i++) {
                            array.push(data1[i])
                        }
                        this.setState({ admins: array })
                        console.log(this.state.admins)
                    });
            });
    }

    /*obtenerDatos(e) {
        var seleccionados = [];
        for (let i = 0; i < document.getElementById("encargado").length; i++) {
            if (document.getElementById("encargado").options[i].selected === true) {
                seleccionados.push(" " + document.getElementById("encargado").options[i].value)
            }
        }
        axios.post("http://localhost:4000/Crear_Conta", {
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            direccion: document.getElementById("direccion").value,
            rol: document.getElementById("rol").value,
            oportunidades: document.getElementById("oportunidades").value,
            encargado: seleccionados
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("nombre").value = ""
        document.getElementById("telefono").value = ""
        document.getElementById("correo").value = ""
        document.getElementById("direccion").value = ""
        document.getElementById("rol").value = ""
        document.getElementById("oportunidades").value = ""
        document.getElementById("encargado").value = ""
        e.preventDefault();
    }*/

    modificarDatos(e) {
        var seleccionados = [];
        for(let i=0;i<document.getElementById("encargado").length;i++){
            if(document.getElementById("encargado").options[i].selected === true ){
                seleccionados.push(" "+document.getElementById("encargado").options[i].value)
            }
        }
        var path = "http://localhost:4000/Crear_Conta/actualizar/" + nombre_ant
        axios.post(path, {
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            direccion: document.getElementById("direccion").value,
            rol: document.getElementById("rol").value ,
            oportunidades: document.getElementById("oportunidades").value,
            encargado: document.getElementById("encargado").value
        }).then(function (response) {
            console.log(response);
        });
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card  carta mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.modificarDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresa el nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono" >Telefono</label>
                                        <input type="text" className="form-control" id="telefono" placeholder="Ingresa el telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo</label>
                                        <input type="text" className="form-control" id="correo" placeholder="Ingresa la correo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="direccion">Direccion</label>
                                        <input type="text" className="form-control" id="direccion" placeholder="Ingresa la direccion" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="rol">Rol</label>
                                        <input type="text" className="form-control" id="rol" placeholder="Ingresa el rol" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="oportunidades">Oportunidades</label>
                                        <textarea className="form-control" id="oportunidades"
                                            placeholder="Ingresa las oportunidades" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="encargado">Encargado</label>
                                        <select className="form-control" 
                                            id="encargado">{
                                                this.state.admins.map(admin => {
                                                    return (
                                                        <option>{admin.nombre}</option>
                                                    )
                                                })
                                            }
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

export default ContaMod;