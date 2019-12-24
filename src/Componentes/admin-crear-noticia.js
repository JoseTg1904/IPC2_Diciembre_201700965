import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';
var id = "";

class ingreso extends React.Component {

    componentDidMount() {
        axios.get("http://localhost:4000/Noticias/id_Not").then(res =>{
            id = res.data;
            console.log(id)
        })
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Noticias", {
            codigo: id,    
            titulo: document.getElementById("titulo").value,
            contenido: document.getElementById("contenido").value,
            comentarios: []
        }).then(function (response) {
            console.log(response);
            axios.get("http://localhost:4000/Noticias/id_Not").then(res =>{
                id = res.data;
            })
        });
        document.getElementById("titulo").value = ""
        document.getElementById("contenido").value = ""
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
                                    <div className="form-group">
                                        <label htmlFor="titulo" >Titulo</label>
                                        <input type="text" className="form-control" id="titulo" placeholder="Ingresa el titulo de la noticia" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contenido">Contenido</label>
                                        <textarea type="text" className="form-control" 
                                        id="contenido" rows="3" placeholder="Ingrese el contenido de la noticia" />
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
        )
    };
}

export default ingreso;