import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;


class Mensajes extends React.Component {

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
        var ruta = "http://localhost:4000/Crear_Admin/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Crear_Admin/info",{nick:nick})
        window.open('/Admin/Cuentas/Modificar_Admin');
        intervalo = setInterval(()=>this.componentDidMount() , 500);
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Mensajes/")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                var aux = []
                for(var i=0;i<data.length;i++){
                if( data[i].destinatario === localStorage.getItem('usuario')   ){
                    aux.push(data[i])
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
                            <th scope="col">Remitente</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Contenido</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                return (
                                    <tr className="table-datos table-active" key={admin.codigo}>
                                        <td>{admin.remitente}</td>
                                        <td>{admin.titulo}</td>
                                        <td>{admin.contenido}</td>
                                        <td>
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

export default Mensajes;