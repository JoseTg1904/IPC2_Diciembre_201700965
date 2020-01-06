import React from 'react';
import Barra from './Barra_Catedratico';
var nombre = ""

class Cursos_Info extends React.Component {

    constructor() {
        super();
        this.state = {
            admins: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    componentDidMount() {
        this.asignar()
        this.obtenerDatos()
    }

    asignar() {
        var ruta = "http://localhost:4000/Crear_Cate/bus/" + localStorage.getItem('usuario')
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                console.log(data.nombre)
                nombre = data.nombre
            })
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Curso/")
            .then(res => res.json())
            .then(data => {
                var aux = [];
                for(var i=0;i<data.length;i++){
                if(data[i].titular === nombre){
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