import React from 'react';
import Barra from './Barra_Estudiante';
import './admin-crear-orden.css'
import './admin-crear-comentario.css'
import axios from 'axios';
var id = "";
var inputs = [];

class comentario extends React.Component {

    constructor() {
        super();
        this.state = {
            noticias: []
        };
        this.datos = this.datos.bind(this)
    }

    agregarComentario(codigo){
        var ru = "http://localhost:4000/Noticias/" + codigo 
        axios.post(ru,{
            codigo:id,
            creador: localStorage.getItem('usuario'),
            contenido: document.getElementById(codigo).value
        })
            window.location.reload(true)
    }

    datos() {
        fetch("http://localhost:4000/Noticias/id_Com")
            .then(res1 => res1.json())
            .then(data1 => {
                id = data1;
                fetch("http://localhost:4000/Noticias/not")
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        this.setState({ noticias: data })
                        ///this.setState({ noticias : data})
                    })
            })
    }

    componentDidMount() {
        this.datos()
        console.log(localStorage.getItem('usuario'))
    }

    editarNoticia(idNot){
        console.log(idNot)
    }

    eliminarNoticia(idNot){
        var ruta = "http://localhost:4000/Noticias/elNot/"+idNot
        axios.delete(ruta).then(res =>{
            console.log(res)
        })
        window.location.reload(true)
    }

    eliminar(idNot,idComen){
        var ruta = "http://localhost:4000/Noticias/elComen/" + idNot + "/" + idComen
        axios.delete(ruta).then(res=>{
            console.log(res)
        })
        window.location.reload(true)
        }


    render() {
        return (
            <div className="crear">
                <Barra />
                {
                    this.state.noticias.map(noticia => {
                        return (
                            <div key={noticia.codigo} className="mt-2">
                                <div className="card  text-white bg-primary carta555 mx-auto mb-3">
                                    <div className="card-header">
                                        <span>    
                                        {noticia.titulo}
                                        <button type="button" onClick={() =>  this.eliminarNoticia(noticia.codigo)}  className="btn btn-primary btn-sm ml-5" >Eliminar</button>
                                        {/*<button type="button" onClick={() =>  this.editarNoticia(noticia.codigo)}  className="btn btn-primary btn-sm" >Editar</button>*/}
                                        </span>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <fieldset>
                                                <label>{noticia.contenido}</label>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <div className="card tex-white bg-secondary carta444 mx-auto">
                                        <div className="card-header">
                                            Comentarios
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                {noticia.comentarios.map(comen => {
                                                    inputs.push(noticia.codigo)
                                                    return (
                                                        <div className="row justify-content-end "key={comen.codigo}>
                                                        <span>
                                                        <label >{comen.creador+" - "+comen.contenido}</label>
                                                        <button type="button" onClick={() =>  this.eliminar(noticia.codigo,comen.codigo)}  className=" btn btn-secondary btn-sm" >Eliminar</button>
                                                        </span>
                                                        </div>
                                                    )
                                                })
                                                }
                                                  <textarea type="text" className="form-control"
                                                    id={noticia.codigo} rows="3" placeholder="Escribe un comentario" />
                                                <button onClick={() => this.agregarComentario(noticia.codigo) } type="button" className="btn but btn-primary" >Comentar</button>

                                            </form>
                                        </div>
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

export default comentario;