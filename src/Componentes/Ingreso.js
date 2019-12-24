import React, { Component } from 'react';
import './Ingreso.css';
import Inicio from './Inicio.js';
import 'bootswatch/dist/slate/bootstrap.min.css';
import axios from 'axios'

class Ingreso extends Component {

    ingreso() {

        var rol = document.getElementById("combo").value;

        switch (rol) {
            case ('Administrador'):
                if (document.getElementById("nick").value === "admin" &&
                    document.getElementById("contra").value === "admin") {     
                        window.location = '/Admin/Inicio'
                } else {
                    var nick = document.getElementById("nick").value;
                    var contra = document.getElementById("contra").value;
                    axios.post("http://localhost:4000/Crear_Admin/validar", {
                        nick: nick,
                        contra: contra
                    }).then(function (response) {
                        if (response.data === 1000) {
                            axios.post("http://localhost:4000/Crear_Admin/info",{nick:nick})    
                            window.location = '/Admin/Inicio';
                        }
                        console.log(response)
                    })
                }
                break;
            case ('Colaborador'):
                    var nick = document.getElementById("nick").value;
                    var contra = document.getElementById("contra").value;
                    axios.post("http://localhost:4000/Crear_Cola/validar", {
                        nick: nick,
                        contra: contra
                    }).then(function (response) {
                        if (response.data === 1000) {
                            axios.post("http://localhost:4000/Crear_Cola/info",{nick:nick})    
                            window.location = '/Cola/Inicio';
                        }
                        console.log(response)
                    })
                console.log('cola');
                break;
            case ('Catedratico'):
                    var nick = document.getElementById("nick").value;
                    var contra = document.getElementById("contra").value;
                    axios.post("http://localhost:4000/Crear_Cate/validar", {
                        nick: nick,
                        contra: contra
                    }).then(function (response) {
                        if (response.data === 1000) {
                            axios.post("http://localhost:4000/Crear_Cate/info",{nick:nick})    
                            window.location = '/Cate/Inicio';
                        }
                        console.log(response)
                    })
                console.log('cate');
                break;
            case ('Estudiante'):
                    var nick = document.getElementById("nick").value;
                    var contra = document.getElementById("contra").value;
                    axios.post("http://localhost:4000/Crear_Estu/validar", {
                        nick: nick,
                        contra: contra
                    }).then(function (response) {
                        if (response.data === 1000) {
                            axios.post("http://localhost:4000/Crear_Estu/info",{nick:nick})    
                            window.location = '/Estu/Inicio';
                        }
                        console.log(response)
                    })
                console.log('estu');
                break;
            default:
                break;
        }
    };

    render() {
        return (
            <div className="Ingreso">
                < Inicio />
                <div class="mt-5">
                    <div class="card  login mx-auto mb-3">
                        <div class="card-header">Iniciar sesión</div>
                        <div class="card-body">
                            <form>
                                <fieldset>
                                    <div className="grupo-texto">
                                        <div class="form-group">
                                            <label>Usuario</label>
                                            <input type="text"
                                                id="nick"
                                                className="nick"
                                                class="form-control" aria-describedby="emailHelp"
                                                placeholder="Ingrese usuario" />
                                        </div>
                                        <div class="form-group">
                                            <label>Contraseña</label>
                                            <input type="password"
                                                id="contra"
                                                name="contra" class="form-control" aria-describedby="emailHelp" placeholder="Ingrese contraseña" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="combo">Tipo de cuenta</label>
                                        <select class="form-control" id="combo">
                                            <option>Administrador</option>
                                            <option>Colaborador</option>
                                            <option>Catedratico</option>
                                            <option>Estudiante</option>
                                        </select>
                                    </div>
                                    <div className="boton-in">
                                        <button onClick={this.ingreso} type="button" class="btn btn-primary">Ingresar</button>
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
export default Ingreso;
