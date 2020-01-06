import React from 'react';
import Barra from './Barra_Admin';
var ar = []

class Estus_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: [],
            aux: [],
            nacs: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.obtenerDatos()
    }

    generarPdf() {

    }

    ordenarAsc(arreglo, parametro) {
        var aux=[]
        arreglo.sort(function (a, b) {
            var x = a[parametro], y = b[parametro]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });
        for(var i=0;i<arreglo.length;i++){
            if(arreglo[i]['pago'] === true){
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
                this.ordenarAsc(data, 'nacionalidad')
                for(var i=0;i<data.length;i++){
                    if(data[i]['pago'] === true){
                    ar.push({nacionalidad:data[i]['nacionalidad']})
                    }
                }
                this.depurarNac(ar)
            });
    }

    depurarNac(data) {
        var auxi = []
        for (var i = 0; i < data.length; i++) {
            for (var j = (i + 1); j < data.length; j++) {
                if ((data[i]['nacionalidad'] === data[j]['nacionalidad'])) {
                   data[i]['nacionalidad'] = "null"
                }
            }
        }
        for (var h = 0; h < data.length; h++) {
            if (!(data[h]['nacionalidad'] === "null")) {
                auxi.push(data[h])
            }
        }
        this.setState({nacs:auxi})
        auxi = []
        ar = []
    }

    buscrIndividual(encargado) {
        var aux = this.state.aux;
        var auxi = []
        for (var i = 0; i < aux.length; i++) {
            if (aux[i]['nacionalidad'] === encargado) {
                auxi.push(aux[i])
            }
        }
        this.setState({ admins: auxi })
        auxi = []
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <div className="row justify-content-center align-items-center">
                    <div>
                        <select className="form-control" id="seleccion">{
                           this.state.nacs.map(admin => {
                                return (
                                    <option>{admin.nacionalidad}</option>
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
                            <th scope="col">Nombre</th>
                            <th scope="col">Nacionalidad</th>
                            <th scope="col">Universidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.nick}>
                                        <td>{admin.carne}</td>
                                        <td>{admin.nombre}</td>
                                        <td>{admin.nacionalidad}</td>
                                        <td>{admin.universidad}</td>
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