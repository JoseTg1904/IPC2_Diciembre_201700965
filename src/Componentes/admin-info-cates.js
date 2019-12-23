import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;

class Cates_Info extends React.Component {

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
        var ruta = "http://localhost:4000/Crear_Cate/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Crear_Cate/info",{nick:nick})
        window.open('/Admin/Cuentas/Modificar_Catedratico');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
        console.log()
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Cate/")
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
                            <th scope="col">Registro de personal</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Universidad</th>
                            <th scope="col">Nickname</th>
                            <th scope="col">Contraseña</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.nick}>
                                        <td>{admin.registro}</td>
                                        <td>{admin.nombre}</td>
                                        <td>{admin.universidad}</td>
                                        <td>{admin.nick}</td>
                                        <td>{admin.contra}</td>
                                        <td>
                                            <button onClick={() => this.modificar(admin.nick)} type="button" className="btn btn-primary btn-dark btn-lg">Editar</button>
                                            <button onClick={() => this.eliminar(admin.nick)} type="button" className="btn btn-primary btn-dark btn-lg">Eliminar</button>
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

export default Cates_Info;