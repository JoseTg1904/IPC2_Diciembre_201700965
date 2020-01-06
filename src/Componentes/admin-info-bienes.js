import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;

class Bienes_Info extends React.Component {

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
        var ruta = "http://localhost:4000/Crear_Bien/" + nick;
        Axios.delete(ruta).then(props =>{
            this.componentDidMount()
        })
        
    }

    modificar(nick){
        Axios.post("http://localhost:4000/Crear_Bien/info",{codigo:nick})
        Axios.get("http://localhost:4000/Crear_Bien").then(res =>{
            console.log(nick)
            for(var i=0;i<res.data.length;i++){
                console.log(res.data[i])
                if(res.data[i]['codigo']===nick){
                    if( !(res.data[i]['tipo']===undefined) ){
                        window.open('/Admin/Modificar_Insumo')
                        intervalo = setInterval(()=>this.componentDidMount() , 500);
                    }else{
                        window.open('/Admin/Modificar_Bien');
                        intervalo = setInterval(()=>this.componentDidMount() , 500);
                    }
                }
            }
        })
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Bien/")
            .then(res => res.json())
            .then(data => {
                this.setState({ admins: data })
                console.log(this.state.admins)
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
                            <th scope="col">Descripcion</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Encargados</th>
                            <th scope="col">Ubicacion</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.admins.map(admin => {
                                if(admin.tipo === undefined){
                                    return (
                                        <tr className="table-datos table-active" key={admin.codigo}>
                                            <td>{admin.codigo}</td>
                                            <td>{admin.nombre}</td>
                                            <td>{admin.descripcion}</td>
                                            <td>{admin.cantidad}</td>
                                            <td>{admin.encargados}</td>
                                            <td>{admin.ubicacion}</td>
                                            <td>{admin.estado}</td>
                                            <td>
                                                <button onClick={() => this.modificar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Editar</button>
                                                <button onClick={() => this.eliminar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                }else{
                                    return (
                                        <tr className="table-datos table-active" key={admin.codigo}>
                                            <td>{admin.codigo}</td>
                                            <td>{admin.tipo + "-" + admin.nombre}</td>
                                            <td>{admin.descripcion}</td>
                                            <td>{"Original: " + admin.cantidad + " " +
                                            "Restante: " + admin.restante}</td>
                                            <td>{admin.encargados}</td>
                                            <td>{admin.ubicacion}</td>
                                            <td>{admin.estado}</td>
                                            <td>
                                                <button onClick={() => this.modificar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Editar</button>
                                                <button onClick={() => this.eliminar(admin.codigo)} type="button" className="btn btn-primary btn-dark btn-lg">Eliminar</button>
                                            </td>
                                        </tr>
                                    )
                                }
                          
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Bienes_Info;