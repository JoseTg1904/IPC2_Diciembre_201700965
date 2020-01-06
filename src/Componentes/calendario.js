import React from 'react';
import Inicio from './Inicio'
var lunes = [];
var martes = [];
var miercoles = [];
var jueves = [];
var viernes = [];
var sabado = [];

class Ads_Info extends React.Component {

    constructor() {
        super();
        this.state={
            lunes:[],
            martes:[],
            miercoles:[],
            jueves:[],
            viernes:[],
            sabado:[]          
        }
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        lunes = [];
        martes = [];
        miercoles = [];
        jueves = [];
        viernes = [];
        sabado = [];
        this.obtenerDatos()
       
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Actividades/")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['fecha'] === '2020-10-12') {
                        lunes.push(data[i])
                    } else if (data[i]['fecha'] === '2020-10-13') {
                        martes.push(data[i])
                    } else if (data[i]['fecha'] === '2020-10-14') {
                        miercoles.push(data[i])
                        console.log(miercoles)
                    } else if (data[i]['fecha'] === '2020-10-15') {
                        jueves.push(data[i])
                    } else if (data[i]['fecha'] === '2020-10-16') {
                        viernes.push(data[i])
                    } else if (data[i]['fecha'] === '2020-10-17') {
                        sabado.push(data[i])
                    }
                }
                this.setState({lunes:lunes,
                    martes:martes,
                    miercoles:miercoles,
                    jueves:jueves,
                    viernes:viernes,
                    sabado:sabado,})
            });
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Inicio />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Lunes</th>
                            <th scope="col">Martes</th>
                            <th scope="col">Miercoles</th>
                            <th scope="col">Jueves</th>
                            <th scope="col">Viernes</th>
                            <th scope="col">Sabado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>
                            {
                                lunes.map(lun => {
                                    return (
                                        <div className="border">
                                            <tr>{"Actividad: " + lun.actividad}</tr>
                                            <tr>{"Expositor: " + lun.expositor}</tr>
                                            <tr>{"Lugar: " + lun.lugar}</tr>
                                            <tr>{"Hora inicial: " + lun.horaIn}</tr>
                                            <tr>{"Hora final: " + lun.horaFin}</tr>
                                        </div>
                                    )
                                })
                            }
                        </td>
                        <td>
                            {
                                martes.map(mar => {
                                    return (
                                    <div className="border">
                                        <tr>{"Actividad: " + mar.actividad}</tr>
                                        <tr>{"Expositor: " + mar.expositor}</tr>
                                        <tr>{"Lugar: " + mar.lugar}</tr>
                                        <tr>{"Hora inicial: " + mar.horaIn}</tr>
                                        <tr>{"Hora final: " + mar.horaFin}</tr>
                                    </div>
                                    )

                                })
                            }
                        </td>
                        <td>
                            {
                                miercoles.map(mier => {
                                    return (
                                        <div className="border">
                                        <tr>{"Actividad: " + mier.actividad}</tr>
                                        <tr>{"Expositor: " + mier.expositor}</tr>
                                        <tr>{"Lugar: " + mier.lugar}</tr>
                                        <tr>{"Hora inicial: " + mier.horaIn}</tr>
                                        <tr>{"Hora final: " + mier.horaFin}</tr>
                                    </div>
                                    )
                                })
                            }
                        </td>
                        <td>
                            {
                                jueves.map(jue => {
                                    return (
                                        <div className="border">
                                        <tr>{"Actividad: " + jue.actividad}</tr>
                                        <tr>{"Expositor: " + jue.expositor}</tr>
                                        <tr>{"Lugar: " + jue.lugar}</tr>
                                        <tr>{"Hora inicial: " + jue.horaIn}</tr>
                                        <tr>{"Hora final: " + jue.horaFin}</tr>
                                    </div>
                                    )
                                })
                            }
                        </td>
                        <td>
                            {
                                viernes.map(vier => {
                                    return (
                                        <div className="border">
                                        <tr>{"Actividad: " + vier.actividad}</tr>
                                        <tr>{"Expositor: " + vier.expositor}</tr>
                                        <tr>{"Lugar: " + vier.lugar}</tr>
                                        <tr>{"Hora inicial: " + vier.horaIn}</tr>
                                        <tr>{"Hora final: " + vier.horaFin}</tr>
                                    </div>
                                    )
                                })
                            }
                        </td>
                        <td>
                            {
                                sabado.map(sab => {
                                    return (
                                        <div className="border">
                                        <tr>{"Actividad: " + sab.actividad}</tr>
                                        <tr>{"Expositor: " + sab.expositor}</tr>
                                        <tr>{"Lugar: " + sab.lugar}</tr>
                                        <tr>{"Hora inicial: " + sab.horaIn}</tr>
                                        <tr>{"Hora final: " + sab.horaFin}</tr>
                                    </div>
                                    )
                                })
                            }
                        </td>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Ads_Info;