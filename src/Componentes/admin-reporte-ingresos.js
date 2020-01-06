import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'

class egreso extends React.Component {

    constructor() {
        super()
        this.state =
        {
            reporte: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/Presupuesto/ingresos")
            .then(res => res.json())
            .then(data => {
                this.setState({ reporte: data })
                document.getElementById("noEntradas").value = this.state.reporte.length
                document.getElementById("total").value = this.calculoTotal()
            })
    }

    calculoTotal() {
        var aux = 0;
        for (var i = 0; i < this.state.reporte.length; i++) {
            aux = aux + Number(this.state.reporte[i]['total'])
        }
        return aux;
    }

    generarPdf() {
        console.log("si entro :v")
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card carta4 mx-auto mb-3 text-white bg-primary">
                        <div className="card-header">Ingresos totales</div>
                        <div className="card-body">
                            <div className="form-group mx-auto">
                                <label htmlFor="noEntradas">No ingresos</label>
                                <input readOnly type="number" className="form-control" id="noEntradas" />
                            </div>
                            <div className="form-group mx-auto">
                                <label htmlFor="total">Total</label>
                                <input readOnly type="number" className="form-control" id="total" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </div>
                </div>
                


                <div className="Tabla-ad">
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Concepto</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.reporte.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.codigo}</td>
                                        <td>{admin.concepto}</td>
                                        <td>{admin.fecha}</td>
                                        <td>{admin.total}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            <div className="row justify-content-center">
                    <button type="button" className="btn but btn-primary" onClick={this.generarPdf}>Generar pdf</button>
                </div>













            </div>

    







        )
    };
}

export default egreso;