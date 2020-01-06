import React from 'react';
import Barra from './Barra_Cola';
//import Axios from 'axios';
//var it = 0;
//var intervalo = 0;

class Conta_Info extends React.Component {

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
        fetch("http://localhost:4000/Crear_Conta/")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
                //this.componentDidMount();
            });
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Rol</th>
                            <th scope="col">Oportunidades</th>
                            <th scope="col">Encargado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.nombre}>
                                        <td>{admin.nombre}</td>
                                        <td>{admin.telefono}</td>
                                        <td>{admin.correo}</td>
                                        <td>{admin.direccion}</td>
                                        <td>{admin.rol}</td>
                                        <td>{admin.oportunidades}</td>
                                        <td>{admin.encargado}</td>
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

export default Conta_Info;