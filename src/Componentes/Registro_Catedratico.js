import React from 'react'
import Registro from './Registro'
import './Registro_Catedratico.css'
import axios from 'axios'


class Registro_Catedratico extends React.Component {

    obtenerDatos(e) {

        axios.post("http://localhost:4000/Crear_Cate", {
            registro: document.getElementById("registro").value,
            nombre: document.getElementById("nombre").value,
            fecha: document.getElementById("fecha").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            universidad: document.getElementById("uni").value,
            nick: document.getElementById("nick").value,
            contra: document.getElementById("contraseña").value
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("registro").value = ""
        document.getElementById("nombre").value = ""
        document.getElementById("fecha").value = ""
        document.getElementById("telefono").value = ""
        document.getElementById("correo").value = ""
        document.getElementById("uni").value = ""
        document.getElementById("nick").value = ""
        document.getElementById("contraseña").value = ""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <div className="barra-re">
                    <Registro />
                </div>
                <div className="mt-5">
                    <div class="card  cart mx-auto mb-3">
                        <div class="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="registro">Registro de personal</label>
                                        <input type="text" className="form-control" id="registro"
                                            aria-describedby="emailHelp" placeholder="Ingresa tu registro de personal" />
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
                                        <label htmlFor="unio">Universidad</label>
                                        <input type="text" className="form-control" id="uni" placeholder="Ingresa tu universidad" />
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

export default Registro_Catedratico