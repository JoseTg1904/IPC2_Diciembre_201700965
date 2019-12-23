import React from 'react';
import './admin-mod-estus.css'
import axios from 'axios';
var nombre_ant = "";

class adminMod extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:4000/Crear_Estu/a/nick").then(function (response) {
            var ruta = "http://localhost:4000/Crear_Estu/bus/" + response.data;
            console.log(ruta + " " + response.data)
            axios.get(ruta, {
            }).then(function (result) {
                console.log("valor del json " + result.data.nombre)
                var info = result.data;
                nombre_ant = info.nick;
                console.log(nombre_ant)
                console.log(info)
                document.getElementById("carne-in").value = info.carne
                document.getElementById("nombre-in").value = info.nombre
                document.getElementById("fecha-in").value = info.fecha
                document.getElementById("telefono-in").value = info.telefono
                document.getElementById("correo-in").value = info.correo
                document.getElementById("uni").value = info.universidad
                document.getElementById("naci").value = info.nacionalidad
                document.getElementById("nick-in").value = info.nick
                document.getElementById("contraseña-in").value = info.contra
            })
        })
    }

    modificarDatos(e) {
        var path = "http://localhost:4000/Crear_Estu/actualizar/" + nombre_ant
        axios.post(path, {
            carne: window.parent.document.getElementById("carne-in").value,
            nombre: window.parent.document.getElementById("nombre-in").value,
            fecha: window.parent.document.getElementById("fecha-in").value,
            telefono: window.parent.document.getElementById("telefono-in").value,
            correo: window.parent.document.getElementById("correo-in").value,
            universidad: document.getElementById("uni").value,
            nacionalidad: document.getElementById("naci").value,
            nick: window.parent.document.getElementById("nick-in").value,
            contra: window.parent.document.getElementById("contraseña-in").value
        }).then(function (res) {
            console.log(res)
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <div className="mt-5">
                    <div className="card  carta mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.modificarDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="carne-in">Carne</label>
                                        <input type="text" className="form-control" id="carne-in" aria-describedby="emailHelp"
                                            placeholder="Ingresa tu carne" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre-in">Nombre</label>
                                        <input type="text" className="form-control" id="nombre-in" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha-in">Fecha</label>
                                        <input type="text" className="form-control" id="fecha-in" placeholder="dd/mm/aaaa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono-in">Telefono</label>
                                        <input type="text" className="form-control" id="telefono-in" placeholder="Ingresa tu telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo-in">Correo electronico</label>
                                        <input type="text" className="form-control" id="correo-in" placeholder="Ingresa tu correo electronico" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unio">Universidad</label>
                                        <input type="text" className="form-control" id="uni" placeholder="Ingresa tu cuniversidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="naci">Nacionalidad</label>
                                        <input type="text" className="form-control" id="naci" placeholder="Ingresa tu nacionalidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nick-in">Nickname</label>
                                        <input type="text" className="form-control" id="nick-in" placeholder="Ingresa tu nickname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contraseña-in">Contraseña</label>
                                        <input type="text" className="form-control" id="contraseña-in" placeholder="Ingresa tu contraseña" />
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Modificar</button>
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

export default adminMod;