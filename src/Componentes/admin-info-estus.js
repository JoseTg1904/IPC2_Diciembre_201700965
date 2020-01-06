import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;

class Estus_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: []
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    importarCSV(){
        Axios.get("http://localhost:4000/Crear_Estu/csv").then(res =>{
            console.log(res)
        })
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
        var ruta = "http://localhost:4000/Crear_Estu/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Crear_Estu/info",{nick:nick})
        window.open('/Admin/Cuentas/Modificar_Estudiante');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
        console.log()
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Estu/")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
               console.log(data)
            });
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <button type="button" className="btn btn-primary" onClick={this.importarCSV}>Importar csv</button>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Carne</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Nacionalidad</th>
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
                                        <td>{admin.carne}</td>
                                        <td>{admin.nombre}</td>
                                        <td>{admin.nacionalidad}</td>
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

export default Estus_Info;