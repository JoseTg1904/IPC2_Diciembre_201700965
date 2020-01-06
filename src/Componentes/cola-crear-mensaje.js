import React from 'react';
import Barra from './Barra_Cola';
import './admin-crear-orden.css'
import axios from 'axios';
var id = "";
var nicks = [];

class ingreso extends React.Component {

    constructor(){
        super()
        this.state={
            admins:[]
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Mensajes/identificador").then(res => {
            id = res.data;
        })
        console.log(id)
        this.obtenerUsuarios()
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
                        fetch("http://localhost:4000/Crear_Cate/")
                            .then(res2 => res2.json())
                            .then(data3 => {
                                for (var i = 0; i < data3.length; i++) {
                                    nicks.push(data3[i])
                                }
                                fetch("http://localhost:4000/Crear_Estu/")
                                    .then(res3 => res3.json())
                                    .then(data4 => {
                                        for (var i = 0; i < data4.length; i++) {
                                            nicks.push(data4[i])
                                        }
                                        nicks.push({nick:"admin"})
                                        this.setState({ admins: nicks })
                                        console.log(this.state.admins)
                                    });
                            });
                    });
            });
    }
    ///////////////////////////////

    obtenerDatos(e) {
        var remi = localStorage.getItem('usuario')
        console.log( localStorage.getItem('usuario') )
        axios.post("http://localhost:4000/Mensajes", {
            codigo: id,
            titulo: document.getElementById("titulo").value,
            contenido: document.getElementById("contenido").value,
            destinatario: document.getElementById("destinatario").value,
            remitente: remi
        }).then(function (response) {
            console.log(response);
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
                                            this.state.admins.map( admin =>{
                                                return(
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