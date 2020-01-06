import React from 'react';
import Barra from './Barra_Cola';
//import Axios from 'axios';


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


    obtenerDatos() {
        var asignados = [];
        var ruta = "http://localhost:4000/Crear_Cola/bus/" + localStorage.getItem('usuario')
        console.log(ruta)
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                console.log(data.carne)
                fetch("http://localhost:4000/Asignacion_Curso")
                    .then(res1 => res1.json())
                    .then(data1 =>{
                        for(let j=0;j<data1.length;j++){
                            if(data1[j]['carne'] === data.carne){
                                asignados.push(data1[j]);
                            }
                        }
                        this.setState({admins:asignados})
                    })
            })
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.curso.codigo}</td>
                                        <td>{admin.curso.nombre}</td>
                                        <td>{admin.curso.seccion}</td>
                                        <td>{admin.curso.universidad}</td>
                                        <td>{admin.curso.titular}</td>
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