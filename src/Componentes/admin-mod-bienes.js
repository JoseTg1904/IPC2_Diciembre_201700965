import React from 'react';
import './admin-mod-bienes.css'
import axios from 'axios';
var nombre_ant = "";

class bienes extends React.Component {

    constructor(){
        super()
        this.state={
            vars:[]
        }
        this.modificarDatos = this.modificarDatos.bind(this)
        this.obtenerAdmins = this.obtenerAdmins.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Crear_Bien/a/nick").then(function (response) {
            var ruta = "http://localhost:4000/Crear_Bien/bus/" + response.data;
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
                document.getElementById("descripcion").value = info.descripcion
                document.getElementById("cantidad").value = info.cantidad
                //document.getElementById("encargados").value// = this.obtenerAdmins()
                document.getElementById("ubicacion").value = info.ubicacion
                document.getElementById("estado").value = info.estado
            })
        })
        this.obtenerAdmins()
    }

    modificarDatos(e){
        var path = "http://localhost:4000/Crear_Bien/actualizar/" + nombre_ant
        var seleccionados = [];
        for(var i=0;i<document.getElementById("encargados").length;i++){
            if(document.getElementById("encargados").options[i].selected === true ){
                seleccionados.push(" "+document.getElementById("encargados").options[i].value)
            }
        }
        axios.post(path, {
            codigo: window.parent.document.getElementById("codigo").value,
            nombre: window.parent.document.getElementById("nombre").value,
            descripcion: window.parent.document.getElementById("descripcion").value,
            cantidad: window.parent.document.getElementById("cantidad").value,
            encargados: document.getElementById("encargados").value,
            ubicacion: document.getElementById("ubicacion").value,
            estado: window.parent.document.getElementById("estado").value,
        }).then(function (res) {
            console.log(res)
        })
        e.preventDefault();
    }

    obtenerAdmins(){
        fetch("http://localhost:4000/Crear_Admin/")
        .then(res => res.json())
        .then(data => {
            fetch("http://localhost:4000/Crear_Cola/")
            .then(res => res.json())
            .then(data1 => {
                var array = [];
                for(var i=0;i<data.length;i++){
                    array.push(data[i])
                }
                for(var i=0;i<data1.length;i++){
                    array.push(data1[i])
                }
                this.setState({vars: array })
                console.log(this.state.admins)
            });
        });
    }

    render() {
        return (
            <div className="crear">
                <div className="mt-5">
                    <div className="card  carta mx-auto mb-3">
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
                                        <label htmlFor="descripcion">Descripcion</label>
                                        <textarea className="form-control" id="descripcion"
                                            placeholder="Ingresa la descipcion" rows="3"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cantidad">Cantidad</label>
                                        <input type="text" className="form-control" id="cantidad" placeholder="Ingresa la cantidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="encargados">Encargados</label>
                                        <select className="form-control" 
                                        id="encargados">{
                                            this.state.vars.map( admin =>{
                                                return(
                                                    <option>{admin.nombre}</option>
                                                )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ubicacion">Ubicacion</label>
                                        <input type="text" className="form-control" id="ubicacion" placeholder="Ingresa la ubicacion" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="estado">Estado</label>
                                        <select className="form-control" id="estado">
                                            <option>Disponible</option>
                                            <option>No disponible</option>
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

export default bienes;