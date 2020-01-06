import React from 'react';
import Barra from './Barra_Estudiante';
import Axios from 'axios';
var it = 0;
var intervalo = 0;
class Ads_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.obtenerDatos()
        this.recargar()
    }

    recargar(){
        it++;
        console.log(it)
        if(it === 300){
            clearInterval(intervalo);
            it = 0;
        }
    }

    asignar(nick) {
        var ruta = "http://localhost:4000/Crear_Estu/bus/" + localStorage.getItem('usuario')
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                console.log(data.carne)
                Axios.post("http://localhost:4000/Asignacion_Actividad", {
                    carne: data.carne,
                    curso: nick,
                    asistencia: false
                })
            })
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Actividades/")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
            });
    }


    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Participantes</th>
                            <th scope="col">Expositor</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.fecha}</td>
                                        <td>{admin.hora}</td>
                                        <td>{admin.lugar}</td>
                                        <td>{admin.actividad}</td>
                                        <td>{admin.participantes}</td>
                                        <td>{admin.expositor}</td>
                                        <td>
                                        <button onClick={() => this.asignar(admin)} type="button" className="btn btn-primary btn-dark btn-lg">Asignar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ads_Info;