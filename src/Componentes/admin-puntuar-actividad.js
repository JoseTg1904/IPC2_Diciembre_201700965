import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';


class ingreso extends React.Component {

    constructor() {
        super()
        this.state = {
            admins: []
        }
    }

    componentDidMount() {
        this.obtenerUsuarios()
    }

    //obtener usuarios del sistema
    obtenerUsuarios() {
        fetch("http://localhost:4000/Actividades")
            .then(res => res.json())
            .then(data1 => {
                var aux = []
                var f = new Date()
                var hora = f.getHours()+":"+f.getMinutes()
                for(var i=0;i<data1.length;i++){
                    if(hora>data1[i]['horaFin']){
                        aux.push(data1[i])
                    }
                }
                this.setState({admins:aux})
                aux = []
            });
    }
    ///////////////////////////////

    obtenerDatos() {
        var sel = document.getElementById("seleccion").value
        var aux = sel.split(",")
        console.log(aux[0])
        var ruta = "http://localhost:4000/Puntuacion/"+aux[0]+"/"+aux[1]+"/"+aux[2]
        axios.post(  ruta,{
            puntuacion:document.getElementById("puntuacion").value,
            comentario:document.getElementById("comentario").value
        }).then(res=>{
            console.log(res)
        })
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
                                        <label htmlFor="seleccion">Actividad</label>
                                        <select className="form-control"
                                            id="seleccion">{
                                                this.state.admins.map(admin => {
                                                    return (
                                                        <option>{admin.codigo+","+admin.actividad+","+admin.descripcion}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="puntuacion">Puntuacion</label>
                                        <input type="number" min="1" max="10" className="form-control" id="puntuacion" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="comentario" >Comentario</label>
                                        <textarea rows="3" type="number" className="form-control" id="comentario" placeholder="Ingresa el comentario de la puntuacion" />
                                    </div>

                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Enviar</button>
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