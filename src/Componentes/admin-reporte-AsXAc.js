import React from 'react';
import Barra from './Barra_Admin';

class Estus_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: [],
            aux: [],
            actis: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.obtenerDatos()
    }

    generarPdf() {

    }

    ordenarAsc(arreglo, parametro) {
        arreglo.sort(function (a, b) {
            var x = a[parametro], y = b[parametro]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });
        for(var i=0;i<arreglo.length;i++){
            if(arreglo[i]['asistencia']===true){
                arreglo[i]['asistencia'] = "Si"
            }else{
                arreglo[i]['asistencia'] = "No"
            }
        }
        this.setState({ admins: arreglo, aux:arreglo })
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Actividades/")
            .then(res => res.json())
            .then(data => {
                this.setState({ actis: data })
            });
    }

    buscrIndividual(encargado) {
        console.log(encargado)
        var sel = encargado.split(" ")
        console.log(sel[0])
        fetch("http://localhost:4000/Asignacion_Actividad")
            .then(res => res.json())
            .then(data => {
                var aux = []
                for (var i = 0; i < data.length; i++) {
                    if (data[i]['curso']['codigo'] === sel[0]) {
                        aux.push(data[i])
                    }
                }
                console.log(aux)
                this.ordenarAsc(aux, 'carne')
                aux = []
            })
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <div className="row justify-content-center align-items-center">
                    <div>
                        <select className="form-control" id="seleccion">{
                            this.state.actis.map(admin => {
                                return (
                                    <option>{admin.codigo + " " + admin.actividad}</option>
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
                            <th scope="col">Carne</th>
                            <th scope="col">Asistencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.nick}>
                                        <td>{admin.carne}</td>
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