import React from 'react';
import Barra from './Barra_Admin';
import './admin-info.css'
import axios from 'axios';
var nombre_ant = "";

class adminInfo extends React.Component {

    componentDidMount(){
        axios.get("http://localhost:4000/Crear_Admin/a/nick").then( function (response)
        {
            localStorage.setItem('usuario', response.data);
            console.log(localStorage.getItem('usuario'))
            var ruta = "http://localhost:4000/Crear_Admin/bus/"+ localStorage.getItem('usuario');
            console.log(ruta + " " + response.data)
            axios.get(ruta,{
            }).then(function (result){
                    console.log("valor del json " + result.data.nombre)
                    var info = result.data;
                    nombre_ant = info.nick;
                    console.log(nombre_ant)
                    console.log(info)
                    document.getElementById("nombre-in").value = info.nombre
                    document.getElementById("fecha-in").value =  info.fecha
                    document.getElementById("telefono-in").value = info.telefono 
                    document.getElementById("correo-in").value= info.correo
                    document.getElementById("nick-in").value = info.nick
                    document.getElementById("contraseña-in").value = info.contra 
                    document.getElementById("puesto-in").value = info.puesto
                })
        })
    }

    modificarDatos(e){
       // document.addEventListener("DOMContentLoaded", fun =>{//, function(e){
            console.log("si llego aca" + 
            "nombre: " + window.parent.document.getElementById("nombre-in").value
            +"fecha: "+window.parent.document.getElementById("fecha-in").value
            +"telefono:"+window.parent.document.getElementById("telefono-in").value
            +"correo: "+window.parent.document.getElementById("correo-in").value
            +"nick: "+window.parent.document.getElementById("nick-in").value
            +"contra: "+window.parent.document.getElementById("contraseña-in").value
            +"puesto: "+window.parent.document.getElementById("puesto-in").value
            )
            var path = "http://localhost:4000/Crear_Admin/actualizar/"+nombre_ant
            console.log(path)
        axios.post(path,{
            nombre: window.parent.document.getElementById("nombre-in").value,
            fecha: window.parent.document.getElementById("fecha-in").value,
            telefono: window.parent.document.getElementById("telefono-in").value,
            correo: window.parent.document.getElementById("correo-in").value,
            nick: window.parent.document.getElementById("nick-in").value,
            contra: window.parent.document.getElementById("contraseña-in").value,
            puesto: window.parent.document.getElementById("puesto-in").value
        }).then(function (res){
            console.log(res)
        })
       // })
        e.preventDefault();
    }

    eliminar(){
        if( localStorage.getItem('usuario') === "admin"){
            alert('El administrador principal no puede ser eliminado')
        }else{
            var ruta = "http://localhost:4000/Crear_Admin/" + localStorage.getItem('usuario');
            axios.delete(ruta).then(props =>{
                window.location = "/"
            })
        }
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
                                        <label htmlFor="nombre-in">Nombre</label>
                                        <input type="text" className="form-control" id="nombre-in" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha-in">Fecha de nacimiento</label>
                                        <input type="text" className="form-control" id="fecha-in" placeholder="dd/mm/aaaa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono-in">Telefono</label>
                                        <input type="text" className="form-control" id="telefono-in" placeholder="Ingresa tu telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo-in">Correo Electronico</label>
                                        <input type="text" className="form-control" id="correo-in" placeholder="Ingresa tu correo electronico" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nick-in">Nickname</label>
                                        <input type="text" className="form-control" id="nick-in" placeholder="Ingresa tu nickname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contraseña-in">Contraseña</label>
                                        <input type="text" className="form-control" id="contraseña-in" placeholder="Ingresa tu contraseña" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="puesto-in">Puesto</label>
                                        <input type="text" className="form-control" id="puesto-in" placeholder="Ingresa tu puesto en JD" />
                                    </div>
                                    <div className="but">
                                    <button type="submit" className="btn but btn-primary">Modificar</button>
                                    <button type="button" onClick={this.eliminar} className="btn but btn-primary">Eliminar</button>
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

export default adminInfo;