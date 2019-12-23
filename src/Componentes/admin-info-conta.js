import React from 'react';
import Barra from './Barra_Admin';
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
        var ruta = "http://localhost:4000/Crear_Conta/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Crear_Conta/info",{nombre:nick})
        window.open('/Admin/Modificar_Contacto');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
        console.log()
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
                                            <button onClick={() => this.modificar(admin.nombre)} type="button" className="btn btn-primary btn-dark btn-lg">Editar</button>
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