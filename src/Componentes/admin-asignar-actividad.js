import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';

class orden extends React.Component {

    constructor() {
        super()
        this.state = {
            acti: []
        }
        this.obtenerDatos = this.obtenerDatos.bind(this)
    }

    componentDidMount() {
        //this.obtenerDatos();
    }

    obtenerDatos(e) {
        var ruta = "http://localhost:4000/Codigos/validar/" + document.getElementById("carne-a").value + "/" + document.getElementById("codigo").value
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                if (data === 1000) {
                
                    fetch("http://localhost:4000/Asignacion_Actividad")
                        .then(res1 => res1.json())
                        .then(data1 => {
                            console.log(data1)
                            var asignados = [];
                            var f = new Date()
                            var hora = f.getHours() + ":" + f.getMinutes()
                            for (let j = 0; j < data1.length; j++) {
                                if (data1[j]['carne'] === document.getElementById("carne-a").value && data1[j]['asistencia'] === false && data1[j]['curso']['horaIn']>hora 
                                && data1[j]['curso']['horaFin']<hora) {
                                    asignados.push(data1[j]);
                                }
                            }
                            console.log(asignados)
                            this.setState({ acti: asignados })
                        })
                } else {
                    alert('no se a econtrado coincidencia con los datos')
                }
            })
        e.preventDefault();
    }

    buscarCodigo() {
        var path = "http://localhost:4000/Codigos/bus/" + document.getElementById("carne").value
        axios.get(path).then(res => {
            console.log(res)
            alert('el codigo es: ' + JSON.stringify(res.data))
        })
    }

    registrar(actividad) {
        console.log('hola')
        console.log(actividad)
        var ruta = "http://localhost:4000/Asignacion_actividad/as/" + actividad.carne + "/" + actividad.curso.codigo
        fetch(ruta)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        }) 
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="">
                    <div className="row justify-content-center align-items-center mt-5">
                        <input type="number" className="form-control col-md-4" id="carne" placeholder="Ingrese el numero de carnet a buscar" />
                        <button type="button" onClick={this.buscarCodigo} className="btn but btn-primary">Buscar codigo</button>
                    </div>
                    <div className="card text-white bg-secondary carta5 mt-1 mx-auto mb-3">
                        <div className="card-header">Registrar</div>
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="carne-a">Carne</label>
                                        <input type="number" className="form-control" id="carne-a" aria-describedby="emailHelp"
                                            placeholder="Ingresa el carne" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="codigo" >Codigo</label>
                                        <input type="text" className="form-control" id="codigo" placeholder="Ingresa el codigo" />
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Registrar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora inicial</th>
                                <th scope="col">Hora final</th>
                                <th scope="col">Lugar</th>
                                <th scope="col">Actividad</th>
                                <th scope="col">Expositor</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.acti.map(admin => {
                                    return (
                                        <tr className="table-datos table-active" key={admin.codigo}>
                                            <td>{admin.curso.fecha}</td>
                                            <td>{admin.curso.horaIn}</td>
                                            <td>{admin.curso.horaFin}</td>
                                            <td>{admin.curso.lugar}</td>
                                            <td>{admin.curso.actividad}</td>
                                            <td>{admin.curso.expositor}</td>
                                            <td>
                                            <button type="submit" onClick={() => this.registrar(admin)} className="btn but btn-primary">Registrar</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}

export default orden;