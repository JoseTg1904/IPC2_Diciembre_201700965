import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';


class ingreso extends React.Component {

    constructor() {
        super()
        this.state = {
            admins: [],
            punteos:[]
        }
        this.BuscarUnico = this.BuscarUnico.bind(this)
    }

    componentDidMount() {
        this.obtenerUsuarios()
    }

    BuscarUnico(){
        fetch("http://localhost:4000/Puntuacion")
        .then(res => res.json())
        .then(data => {
            var seleccion = document.getElementById("seleccion").value.split(",")
            var aux=[]
            var aux2=[]
            for(var i=0;i<data.length;i++){
                if(data[i]['codigo']===seleccion[0]){
                    aux.push(data[i])
                    aux2.push(data[i])
                }
            }
            var numero = 0;
            for(i=0;i<aux.length;i++){
                numero = 0;
                if(aux[i]['puntuaciones'].length>0){
                    for(var j=0;j<aux[i]['puntuaciones'].length;j++){
                        numero = numero + Number(aux[i]['puntuaciones'][j]['puntuacion'])
                    }
                    numero = numero / aux[i]['puntuaciones'].length
                    document.getElementById("promedio").value ="El promedio de puntuaciones es: " + numero
                }
            }
            var auxi = []
            console.log(aux2[0]['puntuaciones'].length)
            for(var i=0;i<aux2[0]['puntuaciones'].length;i++){
                auxi.push(aux2[0]['puntuaciones'][i])
            }
            this.setState({punteos:auxi})
            console.log(aux)
            aux=[]
            auxi = []
        });
    }

    //obtener usuarios del sistema
    obtenerUsuarios() {
        fetch("http://localhost:4000/Actividades")
            .then(res => res.json())
            .then(data1 => {
                var aux = []
                var f = new Date()
                var hora = f.getHours() + ":" + f.getMinutes()
                for (var i = 0; i < data1.length; i++) {
                    if (hora > data1[i]['horaFin']) {
                        aux.push(data1[i])
                    }
                }
                this.setState({ admins: aux })
                aux = []
            });
    }
    ///////////////////////////////

    obtenerDatos() {
        var sel = document.getElementById("seleccion").value
        var aux = sel.split(",")
        console.log(aux[0])
        var ruta = "http://localhost:4000/Puntuacion/" + aux[0] + "/" + aux[1] + "/" + aux[2]
        axios.post(ruta, {
            puntuacion: document.getElementById("puntuacion").value,
            comentario: document.getElementById("comentario").value
        }).then(res => {
            console.log(res)
        })
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="row justify-content-center align-items-center form-group mt-5">
                    <select className="form-control col-md-4"
                        id="seleccion">{
                            this.state.admins.map(admin => {
                                return (
                                    <option>{admin.codigo + "," + admin.actividad + "," + admin.descripcion}</option>
                                )
                            })
                        }
                    </select>
                    <button type="button" className="btn but btn-primary" onClick={this.BuscarUnico}>Buscar</button>
                        <input placeHolder="El promedio es..." className="form-control mx-2 col-md-4" id="promedio"/>
                </div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Punteo</th>
                            <th scope="col">Comentario</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.punteos.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.puntuacion}</td>
                                        <td>{admin.comentario}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    };
}

export default ingreso;