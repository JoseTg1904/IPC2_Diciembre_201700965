import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios'

class Ingresos_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.obtenerDatos()
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Presupuesto/ingresos")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
            });
    }

    eliminar(nick){
        var ruta = "http://localhost:4000/Presupuesto/ingreso/" + nick;
        Axios.delete(ruta).then(props =>{
            console.log(props)
            this.componentDidMount()
        })
        
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Concepto</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Total</th>
                            <th scope="rol"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.codigo}</td>
                                        <td>{admin.concepto}</td>
                                        <td>{admin.fecha}</td>
                                        <td>{admin.total}</td>
                                        <td>{admin.titular}</td>
                                        <td>
                                        <button onClick={() => this.eliminar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Eliminar</button>
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

export default Ingresos_Info;