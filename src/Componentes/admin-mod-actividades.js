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
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Actividades/a/nick").then(function (response) {
            var ruta = "http://localhost:4000/Actividades/bus/" + response.data;
            console.log(ruta)
            axios.get(ruta, {
            }).then(function (result) {
                console.log(result.data)
                var info = result.data;
                nombre_ant = info.codigo;
                document.getElementById("fecha").value = info.fecha
                document.getElementById("horaIn").value = info.horaIn
                document.getElementById("horaFin").value = info.horaFin
                document.getElementById("lugar").value = info.lugar
                document.getElementById("actividad").value = info.actividad
                document.getElementById("participantes").value = info.participantes
                document.getElementById("expositor").value = info.expositor
                document.getElementById("descripcion").value = info.descripcion
            })
        })
    }

    modificarDatos(e){
        var path = "http://localhost:4000/Actividades/actualizar/" + nombre_ant
        console.log(path)
        axios.post(path, {
            codigo: nombre_ant,
            fecha: window.parent.document.getElementById("fecha").value,
            horaIn: window.parent.document.getElementById("horaIn").value,
            horaFin: window.parent.document.getElementById("horaFin").value,
            lugar: window.parent.document.getElementById("lugar").value,
            actividad: window.parent.document.getElementById("actividad").value,
            participantes: document.getElementById("participantes").value,
            expositor: document.getElementById("expositor").value,
            descripcion: window.parent.document.getElementById("descripcion").value,
        }).then(function (res) {
            console.log(res)
        })
        e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <div className="mt-5">
                    <div className="card carta666 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.modificarDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="fecha">Fecha</label>
                                        <input type="date" min="2020-10-12" max="2020-10-17" className="form-control" id="fecha" aria-describedby="emailHelp" placeholder="dd/mm/aaaa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="horaIn" >Hora Inicial</label>
                                        <input type="time" className="form-control" id="horaIn" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="horaFin" >Hora Final</label>
                                        <input type="time" className="form-control" id="horaFin" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lugar">Lugar</label>
                                        <input type="text" className="form-control" id="lugar"
                                            placeholder="Ingresa el lugar de la actividad"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="actividad">Actividad</label>
                                        <select className="form-control" id="actividad">
                                            <option>Conferencia</option>
                                            <option>Visita tecnica  </option>
                                            <option>Taller</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="participantes">Participantes</label>
                                        <input type="number" className="form-control" id="participantes" placeholder="Ingresa la cantidad maxima de participantes" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="expositor">Expositor</label>
                                        <input type="text" className="form-control" id="expositor" placeholder="Ingresa el nombre del expositor" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descripcion">Descripcion</label>
                                        <textarea type="text" className="form-control" id="descripcion" placeholder="Ingresa la descripcion del evento" rows="3" />
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

export default bienes;