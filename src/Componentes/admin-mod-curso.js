import React from 'react';
import './admin-mod-curso.css'
import axios from 'axios';
var nombre_ant = "";

class cursos extends React.Component {

    constructor(){
        super()
        this.state={
            vars:[]
        }
        this.modificarDatos = this.modificarDatos.bind(this)
        this.obtenerAdmins = this.obtenerAdmins.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Crear_Curso/a/nick").then(function (response) {
            var ruta = "http://localhost:4000/Crear_Curso/bus/" + response.data;
            console.log(ruta + " " + response.data)
            axios.get(ruta, {
            }).then(function (result) {
                console.log("valor del json " + result.data.nombre)
                var info = result.data;
                nombre_ant = info.codigo;
                console.log(nombre_ant)
                console.log(info)
                document.getElementById("codigo").value = info.codigo
                document.getElementById("nombre").value = info.nombre
                document.getElementById("seccion").value = info.seccion
                document.getElementById("universidad").value = info.universidad
                document.getElementById("titular").value = info.titular
            })
        })
        this.obtenerAdmins()
    }

    modificarDatos(e){
        var path = "http://localhost:4000/Crear_Curso/actualizar/" + nombre_ant
        axios.post(path, {
            codigo: window.parent.document.getElementById("codigo").value,
            nombre: window.parent.document.getElementById("nombre").value,
            seccion: window.parent.document.getElementById("seccion").value,
            universidad: window.parent.document.getElementById("universidad").value,
            titular: window.parent.document.getElementById("titular").value
        }).then(function (res) {
            console.log(res)
        })
        e.preventDefault();
    }

    obtenerAdmins(){
            fetch("http://localhost:4000/Crear_Cate/")
            .then(res => res.json())
            .then(data1 => {
                this.setState({vars: data1 })
                console.log(this.state.admins)
            });
    }

    render() {
        return (
            <div className="crear">
                <div className="mt-5">
                    <div className="card  carta2 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.modificarDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="codigo">Codigo</label>
                                        <input type="text" className="form-control" id="codigo" aria-describedby="emailHelp" placeholder="Ingresa el codigo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre" >Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa el nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="seccion">Seccion</label>
                                        <input type="text" className="form-control" id="seccion" placeholder="Ingresa la cantidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="universidad">Universidad</label>
                                        <input type="text" className="form-control" id="universidad" placeholder="Ingresa la ubicacion" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="titular">Titular</label>
                                        <select className="form-control" 
                                        id="titular">{
                                            this.state.vars.map( admin =>{
                                                return(
                                                    <option>{admin.nombre}</option>
                                                )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Modifcar</button>
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

export default cursos;