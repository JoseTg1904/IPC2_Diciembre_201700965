import React from 'react';
import Barra from './Barra_Cola';
import './cola-info.css'
import axios from 'axios';
var nombre_ant = "";

class colaInfo extends React.Component {

    componentDidMount(){
        axios.get("http://localhost:4000/Crear_Cola/a/nick").then( function (response)
        {
            var ruta = "http://localhost:4000/Crear_Cola/bus/"+ response.data;
            console.log(ruta + " " + response.data)
            axios.get(ruta,{
            }).then(function (result){
                    console.log("valor del json " + result.data.nombre)
                    var info = result.data;
                    nombre_ant = info.nick;
                    console.log(nombre_ant)
                    console.log(info)
                    document.getElementById("carne").value = info.carne
                    document.getElementById("nombre").value =  info.nombre
                    document.getElementById("fecha").value = info.fecha 
                    document.getElementById("telefono").value= info.telefono
                    document.getElementById("correo").value = info.correo
                    document.getElementById("nick").value = info.nick
                    document.getElementById("contraseña").value = info.contra
                })
        })
    }

    modificarDatos(e){
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

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div class="card  carta mx-auto mb-3">
                        <div class="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="carne">Carne</label>
                                        <input type="text" className="form-control" id="carne" 
                                        aria-describedby="emailHelp" placeholder="Ingresa tu carne" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha de nacimiento</label>
                                        <input type="text" className="form-control" id="fecha" placeholder="dd/mm/aaaa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input type="text" className="form-control" id="telefono" placeholder="Ingresa tu telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo electronico</label>
                                        <input type="text" className="form-control" id="correo" placeholder="Ingresa tu correo electronico" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nick">Nickname</label>
                                        <input type="text" className="form-control" id="nick" placeholder="Ingresa tu nickname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contraseña">Contraseña</label>
                                        <input type="text" className="form-control" id="contraseña" placeholder="Ingresa tu contraseña" />
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

export default colaInfo;