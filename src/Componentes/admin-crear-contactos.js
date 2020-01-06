import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-contactos.css'
import axios from 'axios';

class contacto extends React.Component {

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
                for(let i=0;i<data.length;i++){
                    array.push(data[i])
                }
                for(let i=0;i<data1.length;i++){
                    array.push(data1[i])
                }
                this.setState({ admins: array })
                console.log(this.state.admins)
            });
        });
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Crear_Conta", {
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
        document.getElementById("nombre").value = ""
        document.getElementById("telefono").value = ""
        document.getElementById("correo").value = ""
        document.getElementById("direccion").value = ""
        document.getElementById("rol").value = ""
        document.getElementById("oportunidades").value = ""
        document.getElementById("encargado").value = ""
        e.preventDefault();
    }

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
                    nombre: arreglo[0],
                    telefono: arreglo[1],
                    correo: arreglo[2],
                    direccion: arreglo[3],
                    rol: arreglo[4],
                    oportunidades: arreglo[5],
                    encargado: arreglo[6]
                }
                axios.post("http://localhost:4000/Crear_Conta", json).then(function (response) {
                    console.log(response);
                });
            }
            alert('se han cargado los contactos')
        }
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="row justify-content-center align-items-center">
                    <input type="file" onChange={e => this.importarCSV(e)} ref="this.file" accept=".csv" id="archivo" />
                </div>
                <div className="mt-5">
                    <div className="card  carta50 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Ingresa el nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono" >Telefono</label>
                                        <input type="number" className="form-control" id="telefono" placeholder="Ingresa el telefono" />
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
                                            this.state.admins.map( admin =>{
                                                return(
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

export default contacto;