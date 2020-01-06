import React from 'react'
import Registro from './Registro'
import axios from 'axios'
import './Registro_Estudiante.css'

class Registro_Estudiante extends React.Component {

    obtenerDatos(e){
        console.log( document.getElementById("fecha").value )
        axios.post("http://localhost:4000/Crear_Estu",{
            carne: document.getElementById("carne").value,
            nombre: document.getElementById("nombre").value,
            fecha: document.getElementById("fecha").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            universidad: document.getElementById("uni").value,
            nacionalidad: document.getElementById("naci").value,
            nick: document.getElementById("nick").value,
            contra: document.getElementById("contraseña").value,
            pago: false
        }).then(function (response){
            console.log(response);
        });
        document.getElementById("carne").value=""
        document.getElementById("nombre").value=""
        document.getElementById("fecha").value=""
        document.getElementById("telefono").value=""
        document.getElementById("correo").value=""
        document.getElementById("uni").value=""
        document.getElementById("naci").value=""
        document.getElementById("nick").value=""
        document.getElementById("contraseña").value =""
        alert('Registro realizado con exito')
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Registro />
                <div className="mt-5">
                    <div class="card  car mx-auto mb-3">
                        <div class="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="carne">Carne</label>
                                        <input type="number" className="form-control" id="carne" 
                                        aria-describedby="emailHelp" placeholder="Ingresa tu carne" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha de nacimiento</label>
                                        <input type="date" className="form-control" id="fecha" placeholder="Ingresa tu fecha de nacimiento" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input type="number" className="form-control" id="telefono" placeholder="Ingresa tu telefono" />
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
                                        <label htmlFor="naci">Nacionalidad</label>
                                        <input type="text" className="form-control" id="naci" placeholder="Ingresa tu nacionalidad" />
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

export default Registro_Estudiante