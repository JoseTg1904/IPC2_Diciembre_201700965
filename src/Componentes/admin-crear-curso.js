import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-curso.css'
import axios from 'axios';

class curso extends React.Component {

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
            fetch("http://localhost:4000/Crear_Cate/")
            .then(res => res.json())
            .then(data1 => {
                this.setState({ admins: data1 })
                console.log(this.state.admins)
            });
       
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Crear_Curso", {
            codigo: document.getElementById("codigo").value,
            nombre: document.getElementById("nombre").value,
            seccion: document.getElementById("seccion").value,
            universidad: document.getElementById("universidad").value,
            titular: document.getElementById("catedratico").value
        }).then(function (response) {
            console.log(response);
        });
        document.getElementById("nombre").value = ""
        document.getElementById("codigo").value = ""
        document.getElementById("seccion").value = ""
        document.getElementById("universidad").value = ""
        document.getElementById("catedratico").value = ""
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
                    nombre: arreglo[1],
                    seccion: arreglo[2],
                    universidad: arreglo[3],
                    titular: arreglo[4]
                }
                axios.post("http://localhost:4000/Crear_Curso", json).then(function (response) {
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
                    <div className="card  carta1 mx-auto mb-3">
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
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
                                        <input type="text" className="form-control" id="seccion" placeholder="Ingresa la seccion" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="universidad">Universidad</label>
                                        <input type="text" className="form-control" id="universidad" placeholder="Ingresa la universidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="catedratico">Catedratico titular</label>
                                        <select className="form-control"  
                                        id="catedratico">{
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

export default curso;