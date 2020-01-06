import React from 'react';
import './admin-crear-insumos.css'
import axios from 'axios';
var id = "";
var nombre_ant = ""


class admin extends React.Component {

    constructor(){
        super();
        this.state={
            admins:[]
        }
    }

    componentDidMount(){
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
                document.getElementById("tipo").value = info.tipo
                document.getElementById("nombre").value = info.nombre
                document.getElementById("descripcion").value = info.descripcion
                document.getElementById("cantidad").value = info.cantidad
            })
        })
    }

    modificarDatos(e){
        var path = "http://localhost:4000/Crear_Bien/actualizar/" + nombre_ant
        axios.post(path, {
            codigo: nombre_ant,
            tipo: window.parent.document.getElementById("tipo").value,
            nombre: window.parent.document.getElementById("nombre").value,
            descripcion: window.parent.document.getElementById("descripcion").value,
            cantidad: window.parent.document.getElementById("cantidad").value,
            restante: document.getElementById("cantidad").value,
        }).then(function (res) {
            console.log(res)
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <div className="mt-5">
                    <div className="card carta696 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.modificarDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="tipo">Tipo</label>
                                        <select className="form-control" id="tipo">
                                            <option>Coffe break</option>
                                            <option>Almuerzo</option>
                                            <option>Insumo</option>
                                        </select>
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
                                        <input type="number" className="form-control" id="cantidad" placeholder="Ingresa la cantidad" />
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Modificar</button>
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