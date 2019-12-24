import React from 'react';
import Barra from './Barra_Cola';
import Axios from 'axios';
var it = 0;
var intervalo = 0;

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

    eliminar(nick) {
        var ruta = "http://localhost:4000/Crear_Conta/" + nick;
        Axios.delete(ruta).then(props => {
            this.componentDidMount()
        })

    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Conta/")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                var info = "http://localhost:4000/Crear_Cola/bus/" + localStorage.getItem('usuario');
                console.log(info)
                fetch(info)
                    .then(res1 => res1.json())
                    .then(data1 => {
                        console.log(data1)
                        var propios = [];
                        for (let i = 0; i < data.length; i++) {
                            if (data[i]['encargado'] === data1.nombre) {
                                propios.push(data[i])
                            }
                        }
                        this.setState({ admins: propios })
                    })
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
                            <th scope="col"></th>
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
                                        <td>
                                            <button onClick={() => this.eliminar(admin.nombre)} type="button" className="btn btn-primary btn-dark btn-lg">Eliminar</button>
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

export default Conta_Info;