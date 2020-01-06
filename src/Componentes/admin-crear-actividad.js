import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-actividad.css'
import axios from 'axios';
var codigo = "";

class admin extends React.Component {

    constructor(){
        super();
        this.state={
            admins:[]
        }
    }

    componentDidMount(){
        fetch("http://localhost:4000/Actividades/identificador")
        .then(res => res.json())
        .then(data => {
           codigo = data
        }); 
    }

    obtenerDatos(e) {
        console.log(document.getElementById("fecha").value)
       axios.post("http://localhost:4000/Actividades", {
            codigo: codigo,
            fecha: document.getElementById("fecha").value,
            horaIn: document.getElementById("horaIn").value,
            horaFin: document.getElementById("horaFin").value,
            lugar: document.getElementById("lugar").value,
            actividad: document.getElementById("actividad").value,
            participantes: document.getElementById("participantes").value,
            expositor: document.getElementById("expositor").value,
            descripcion: document.getElementById("descripcion").value
        }).then(function (response) {
            console.log(response);
        });
        fetch("http://localhost:4000/Actividades/identificador")
        .then(res => res.json())
        .then(data => {
           codigo = data
        }); 
        document.getElementById("fecha").value = ""
        document.getElementById("horaIn").value = ""
        document.getElementById("horaIn").value = ""
        document.getElementById("lugar").value = ""
        document.getElementById("actividad").value = ""
        document.getElementById("participantes").value = ""
        document.getElementById("expositor").value = ""
        document.getElementById("descripcion").value = ""
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
                    codigo: arreglo[0],
                    fecha: arreglo[1],
                    horaIn: arreglo[2],
                    horaFin: arreglo[3],
                    lugar: arreglo[4],
                    actividad: arreglo[5],
                    participantes: arreglo[6],
                    expositor: arreglo[7],
                    descripcion: arreglo[8]
                }
                axios.post("http://localhost:4000/Actividades", json).then(function (response) {
                    console.log(response);
                });
            }
            alert('se han cargado los cursos')
        }
    }


    render() {
        return (
            <div className="crear">
                <Barra />
                <button type="button" className="btn btn-primary" onClick={this.importarCSV}>Importar csv</button>
                <div className="mt-5">
                    <div className="card carta666 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
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
                                            <option>Visita tecnica</option>
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

export default admin;