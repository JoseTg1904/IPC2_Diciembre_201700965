import React from 'react';
import Barra from './Barra_Admin';

class Estus_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: [],
            aux: [],
            estu: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.obtenerDatos()
    }

    generarPdf() {

    }

    ordenarAsc(arreglo, parametro) {
        var aux = []
        arreglo.sort(function (a, b) {
            var x = a[parametro], y = b[parametro]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });
        for (var i = 0; i < arreglo.length; i++) {
            if (arreglo[i]['pago'] === true) {
                aux.push(arreglo[i])
            }
        }
        this.setState({ admins: aux, aux: aux })
        aux = []
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Estu/")
            .then(res => res.json())
            .then(data => {
                this.setState({ estu: data })
            });
    }

    buscrIndividual(encargado) {
        var auxi = []
        fetch("http://localhost:4000/Asignacion_Actividad/")
            .then(res => res.json())
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['carne'] === encargado) {
                        auxi.push(data[i])
                    }
                }
                for (i = 0; i < auxi.length; i++) {
                    if (auxi[i]['asistencia'] === true) {
                        auxi[i]['asistencia'] = "Si"
                    } else {
                        auxi[i]['asistencia'] = "No"
                    }
                }
                this.setState({ admins: auxi })
                auxi = []
            })
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <div className="row justify-content-center align-items-center">
                    <div>
                        <select className="form-control" id="seleccion">{
                            this.state.estu.map(admin => {
                                return (
                                    <option>{admin.carne}</option>
                                )
                            })
                        }
                        </select>
                    </div>
                    <button onClick={() => this.buscrIndividual(document.getElementById("seleccion").value)} type="button" className="btn btn-primary btn-dark btn-lg">Buscar Individual</button>
                </div>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Actividad</th>
                            <th scope="col">Asistencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.nick}>
                                        <td>{admin.curso.actividad+" "+admin.curso.descripcion}</td>
                                        <td>{admin.asistencia}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <button type="button" className="btn but btn-primary" onClick={this.generarPdf}>Generar pdf</button>
                </div>
            </div>
        )
    }
}

export default Estus_Info;