import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';
var id = "";

class comentario extends React.Component {

    constructor(){
        super();
        this.state = {
            noticias: []
        };
        this.datos = this.datos.bind(this)
    }

    datos(){
        fetch( "http://localhost:4000/Noticias/id_Com")
        .then(res1=>res1.json())
        .then(data1 =>{
            id = data1;
            fetch("http://localhost:4000/Noticias/not")
            .then(res=>res.json())
            .then(data => {
                console.log(data)
                this.setState({ noticias: data })
                ///this.setState({ noticias : data})
            })
        })
    }

    componentDidMount() {
        this.datos()
    }

    obtenerDatos(e) {
        axios.post("http://localhost:4000/Noticias", {
            codigo: id,    
            titulo: document.getElementById("titulo").value,
            contenido: document.getElementById("contenido").value,
            comentarios: []
        }).then(function (response) {
            console.log(response);
            axios.get("http://localhost:4000/Noticias/id_Com").then(res =>{
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
                {
                    this.state.noticias.map( noticia =>{          
                        return(
                            <div className="mt-5">
                            <div className="card  text-white bg-primary carta5 mx-auto mb-3">
                            <div className="card-header">
                            {noticia.titulo}    
                            </div>
                            <div className="card-body">
                            <form>
                                <fieldset>
                            <label>{noticia.contenido}</label>
                                </fieldset>
                            </form>
                            </div>
                        </div>
                        </div>
                        )
                   
                    })
                }
                
            </div>
        )
    };
}

   


                 /*<form onSubmit={this.obtenerDatos}>
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
                    </form>*/

export  default comentario;