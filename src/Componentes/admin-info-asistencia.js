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

    eliminar(carne,codigo){
        console.log(carne+" "+codigo)
        var ruta = "http://localhost:4000/Asignacion_Actividad/des/"+carne+"/"+codigo;
        Axios.get(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Actividades/info",{nick:nick})
        window.open('/Admin/Modificar_Actividad');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Asignacion_Actividad/")
            .then(res => res.json())
            .then(data => {
                var aux = data;
                for(var i=0;i<aux.length;i++){
                    if(aux[i]['asistencia']===true){
                        aux[i]['asistencia'] = "Si"
                    }else{
                        aux[i]['asistencia'] = "No"
                    }
                }
                this.setState({ admins: aux })
            });
    }

    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Estudiante</th>
                            <th scope="col">Actividad</th>
                            <th scope="col">Asistencia</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.carne}</td>
                                        <td>{admin.curso.expositor+" "+admin.curso.descripcion}</td>
                                        <td>{admin.asistencia}</td>
                                        <td>
                                            <button onClick={() => this.eliminar(admin.carne,admin.curso.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Eliminar</button>
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