import React from 'react';
import Barra from './Barra_Estudiante';

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
        var ruta = "http://localhost:4000/Crear_Estu/bus/" + localStorage.getItem('usuario')
        console.log(ruta)
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                console.log(data.carne)
                fetch("http://localhost:4000/Asignacion_Actividad")
                    .then(res1 => res1.json())
                    .then(data1 =>{
                        for(let j=0;j<data1.length;j++){
                            if(data1[j]['carne'] === data.carne){
                                asignados.push(data1[j]);
                            }
                        }
                        console.log(asignados)
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
                        <th scope="col">Fecha</th>
                            <th scope="col">Hora inicial</th>
                            <th scope="col">Hora final</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Expositor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                      <td>{admin.curso.fecha}</td>
                                        <td>{admin.curso.horaIn}</td>
                                        <td>{admin.curso.horaFin}</td>
                                        <td>{admin.curso.lugar}</td>
                                        <td>{admin.curso.actividad}</td>
                                        <td>{admin.curso.expositor}</td>
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