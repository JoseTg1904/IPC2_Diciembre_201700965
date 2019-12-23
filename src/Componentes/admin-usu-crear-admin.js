import React from 'react';
import Barra from './Barra_Admin';
import './admin-usu-crear-admin.css'
import axios from 'axios';

class admin extends React.Component {

    obtenerDatos(e){

        axios.post("http://localhost:4000/Crear_Admin",{
            nombre: document.getElementById("nombre").value,
            fecha: document.getElementById("fecha").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            nick: document.getElementById("nick").value,
            contra: document.getElementById("contraseña").value,
            puesto: document.getElementById("puesto").value
        }).then(function (response){
            console.log(response);
        });
        document.getElementById("nombre").value=""
        document.getElementById("fecha").value=""
        document.getElementById("telefono").value=""
        document.getElementById("correo").value=""
        document.getElementById("nick").value=""
        document.getElementById("contraseña").value=""
        document.getElementById("puesto").value =""
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
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresa tu nombre" />
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
                                        <label htmlFor="correo">Correo Electronico</label>
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
                                    <div className="form-group">
                                        <label htmlFor="puesto">Puesto</label>
                                        <input type="text" className="form-control" id="puesto" placeholder="Ingresa tu puesto en JD" />
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