import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;

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
        this.recargar()
    }

    recargar(){
        it++;
        console.log(it)
        if(it === 300){
            clearInterval(intervalo);
            it = 0;
        }
    }

    eliminar(nick){
        var ruta = "http://localhost:4000/Crear_Curso/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Crear_Curso/info",{codigo:nick})
        window.open('/Admin/Modificar_Curso');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
        console.log()
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Curso/")
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
                                            <button onClick={() => this.modificar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Editar</button>
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

export default Cursos_Info;