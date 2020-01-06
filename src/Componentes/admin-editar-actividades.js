import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;
class Ads_Info extends React.Component {

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
        var ruta = "http://localhost:4000/Actividades/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Actividades/info",{nick:nick})
        window.open('/Admin/Modificar_Actividad');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Actividades/")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
            });
    }

    importarCSV(){
        Axios.get("http://localhost:4000/Actividades/csv").then(res =>{
            console.log(res)
        })
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <button type="button" className="btn btn-primary" onClick={this.importarCSV}>Importar csv</button>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">Hora inicial</th>
                            <th scope="col">Hora final</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Participantes</th>
                            <th scope="col">Expositor</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.fecha}</td>
                                        <td>{admin.horaIn}</td>
                                        <td>{admin.horaFin}</td>
                                        <td>{admin.lugar}</td>
                                        <td>{admin.actividad}</td>
                                        <td>{admin.participantes}</td>
                                        <td>{admin.expositor}</td>
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

export default Ads_Info;