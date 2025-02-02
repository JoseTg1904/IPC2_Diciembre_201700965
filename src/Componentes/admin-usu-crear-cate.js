import React from 'react';
import Barra from './Barra_Admin';
import './admin-usu-crear-cate.css'
import axios from 'axios';

class cate extends React.Component {

    importarCSV(e) {
        let archivo = e.target.files
        let lector = new FileReader()
        lector.readAsText(archivo[0])
        lector.onload = e => {
            let info = e.target.result
            var dataArray = info.split(/\r?\n/);
            for (var i = 0; i < dataArray.length; i++) {
                var arreglo = dataArray[i].split(",");
                var json = {
                    registro: arreglo[0],
                    nombre: arreglo[1],
                    fecha: arreglo[2],
                    telefono: arreglo[3],
                    correo: arreglo[4],
                    universidad: arreglo[5],
                    nick: arreglo[6],
                    contra: arreglo[7]
                }
                axios.post("http://localhost:4000/Crear_Cate", json).then(function (response) {
                    console.log(response);
                });
            }
            alert('se han cargado los catedraticos')
        }
    }

    obtenerDatos(e){

        axios.post("http://localhost:4000/Crear_Cate",{
            registro: document.getElementById("registro").value,
            nombre: document.getElementById("nombre").value,
            fecha: document.getElementById("fecha").value,
            telefono: document.getElementById("telefono").value,
            correo: document.getElementById("correo").value,
            universidad: document.getElementById("uni").value,
            nick: document.getElementById("nick").value,
            contra: document.getElementById("contraseña").value
        }).then(function (response){
            console.log(response);
        });
        document.getElementById("registro").value=""
        document.getElementById("nombre").value=""
        document.getElementById("fecha").value=""
        document.getElementById("telefono").value=""
        document.getElementById("correo").value=""
        document.getElementById("uni").value=""
        document.getElementById("nick").value=""
        document.getElementById("contraseña").value =""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="row justify-content-center align-items-center">
                    <input type="file" onChange={e => this.importarCSV(e)} ref="this.file" accept=".csv" id="archivo" />
                </div>
                <div className="mt-5">
                    <div className="card  cart mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="registro">Registro de personal</label>
                                        <input type="number" className="form-control" id="registro" 
                                        aria-describedby="emailHelp" placeholder="Ingresa tu registro de personal" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha de nacimiento</label>
                                        <input type="date" className="form-control" id="fecha" placeholder="dd/mm/aaaa" />
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

export default cate;