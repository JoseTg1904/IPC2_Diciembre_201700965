import React from 'react';
import Barra from './Barra_Cola';
import Axios from 'axios';
var it = 0;
var intervalo = 0;

class Bienes_Info extends React.Component {

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
        fetch("http://localhost:4000/Crear_Bien/")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
                console.log(this.state.admins)
            });
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Encargados</th>
                            <th scope="col">Ubicacion</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.codigo}</td>
                                        <td>{admin.nombre}</td>
                                        <td>{admin.descripcion}</td>
                                        <td>{admin.cantidad}</td>
                                        <td>{admin.encargados}</td>
                                        <td>{admin.ubicacion}</td>
                                        <td>{admin.estado}</td>
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

export default Bienes_Info;