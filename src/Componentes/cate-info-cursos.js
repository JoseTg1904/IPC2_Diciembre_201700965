import React from 'react';
import Barra from './Barra_Catedratico';
import Axios from 'axios';


class Cursos_Info extends React.Component {

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


    asignar(nick) {
        var ruta = "http://localhost:4000/Crear_Cate/bus/" + localStorage.getItem('usuario')
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                console.log(data.nombre)
                var path = "http://localhost:4000/Crear_Curso/agregar/" + nick + "/" + data.nombre
                Axios.get(path).then(req =>{
                    console.log(req)
                })
            })
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Curso/")
            .then(res => res.json())
            .then(data => {
                var aux = [];
                for(var i=0;i<data.length;i++){
                if(data[i].titular === ""){
                    aux.push(data[i])
                }
            }
                this.setState({ admins: aux })
            });
    }

    render() {
        return (
            <div className="Tabla-ad" >
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Seccion</th>
                            <th scope="col">Universidad</th>
                            <th scope="col">Catedratico titular</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.codigo}</td>
                                        <td>{admin.nombre}</td>
                                        <td>{admin.seccion}</td>
                                        <td>{admin.universidad}</td>
                                        <td>{admin.titular}</td>
                                        <td>
                                            <button onClick={() => this.asignar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Asignar</button>
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

export default Cursos_Info;