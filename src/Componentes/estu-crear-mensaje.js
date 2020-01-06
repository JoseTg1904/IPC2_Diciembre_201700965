import React from 'react';
import Barra from './Barra_Estudiante';
import './admin-crear-orden.css'
import axios from 'axios';
var id = "";
var nicks = [];
var catedraticos = []


class ingreso extends React.Component {

    constructor() {
        super()
        this.state = {
            admins: []
        }
    }

    componentDidMount() {
        this.obtenerCatedraticos()
        axios.get("http://localhost:4000/Mensajes/identificador").then(res => {
            id = res.data;
        })
        console.log(id)
        this.obtenerUsuarios()
    }

    //obtener catedraticos 
    obtenerCatedraticos() {
        var asignados = [];
        var ruta = "http://localhost:4000/Crear_Estu/bus/" + localStorage.getItem('usuario')
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                fetch("http://localhost:4000/Asignacion_Curso")
                    .then(res1 => res1.json())
                    .then(data1 => {
                        for (let j = 0; j < data1.length; j++) {
                            if (data1[j]['carne'] === data.carne) {
                                asignados.push(data1[j]);
                            }
                        }
                        fetch("http://localhost:4000/Crear_Cate")
                            .then(res2 => res2.json())
                            .then(data2 => {
                                for (var i = 0; i < asignados.length; i++) {
                                    for (var j = 0; j < data2.length; j++) {
                                        if (asignados[i]['curso']['titular'] === data2[j]['nombre']) {
                                            catedraticos.push(data2[j])
                                        }
                                    }
                                }
                            })
                    })
            })
    }

    //obtener usuarios del sistema
    obtenerUsuarios() {
        fetch("http://localhost:4000/Crear_Admin/")
            .then(res => res.json())
            .then(data1 => {
                nicks = data1;
                fetch("http://localhost:4000/Crear_Cola/")
                    .then(res1 => res1.json())
                    .then(data2 => {
                        for (var i = 0; i < data2.length; i++) {
                            nicks.push(data2[i])
                        }
                        for (i = 0; i < catedraticos.length; i++) {
                            nicks.push(catedraticos[i])
                        }
                        nicks.push({ nick: "admin" })
                        this.setState({ admins: nicks })
                        catedraticos=[]
                    });
            });
    }
    ///////////////////////////////

    obtenerDatos(e) {
        var remi = localStorage.getItem('usuario')
        axios.post("http://localhost:4000/Mensajes", {
            codigo: id,
            titulo: document.getElementById("titulo").value,
            contenido: document.getElementById("contenido").value,
            destinatario: document.getElementById("destinatario").value,
            remitente: remi
        }).then(function (response) {
            axios.get("http://localhost:4000/Mensajes/identificador").then(res => {
                id = res.data;
            })
        });
        document.getElementById("titulo").value = ""
        document.getElementById("contenido").value = ""
        document.getElementById("destinatario").value = ""
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card  text-white bg-primary carta5 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="titulo">Titulo</label>
                                        <input type="text" className="form-control" id="titulo" aria-describedby="emailHelp" placeholder="Ingresa el titulo del mensaje" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contenido" >Contenido</label>
                                        <textarea rows="3" type="number" className="form-control" id="contenido" placeholder="Ingresa el cuerpo del mensaje" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="destinatario">Destinatario</label>
                                        <select className="form-control"
                                            id="destinatario">{
                                                this.state.admins.map(admin => {
                                                    return (
                                                        <option>{admin.nick}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Enviar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default ingreso;