import React from 'react';
import Barra from './Barra_Admin';
import Axios from 'axios';
var it = 0;
var intervalo = 0;
var ar = []


class Conta_Info extends React.Component {

    constructor() {
        super();

        this.state = {
            admins: [],
            encargados: [],
            aux:[],
            text:''
        };
        this.obtenerDatos = this.obtenerDatos.bind(this);
    }

    filter(event){
        var text = event.target.value
        var data = this.state.aux
        var newData = data.filter(function(item){
            var itemData = item.nombre.toLowerCase()
            var textData = text.toLowerCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({admins:newData,text:text})
    }

    componentDidMount() {
        this.obtenerDatos()
        this.recargar()
    }

    recargar() {
        it++;
        console.log(it)
        if (it === 300) {
            clearInterval(intervalo);
            it = 0;
        }
    }

    eliminar(nick) {
        var ruta = "http://localhost:4000/Crear_Conta/" + nick;
        Axios.delete(ruta).then(props => {
            this.componentDidMount()
        })

    }

    buscrIndividual(encargado) {
        var aux = this.state.admins;
        var auxi = []
        if (encargado === "Sin asignar") {
            aux = this.state.aux
            for (var i = 0; i < aux.length; i++) {
                if (aux[i]['encargado'] === "") {
                    auxi.push(aux[i])
                }
            }
            this.setState({admins:auxi})
        } else if (encargado === "Todos") {
            this.setState({admins:this.state.aux})
        } else {
            aux = this.state.aux
            console.log(aux)
            for (i = 0; i < aux.length; i++) {
                if (aux[i]['encargado'] === encargado) {
                    console.log("si entro")
                    auxi.push(aux[i])
                }
            }
            this.setState({admins:auxi})
        }
        auxi=[]
    }

    ordenarAsc(arreglo, parametro) {
        arreglo.sort(function (a, b) {
            var x = a[parametro], y = b[parametro]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });
        this.setState({ admins: arreglo })
    }

    modificar(nick) {
        Axios.post("http://localhost:4000/Crear_Conta/info", { nombre: nick })
        window.open('/Admin/Modificar_Contacto');
        intervalo = setInterval(() => this.componentDidMount(), 500);
        console.log()
    }

    obtenerDatos() {
        fetch("http://localhost:4000/Crear_Conta/")
            .then(res => res.json())
            .then(data => {
                ar.push({ encargado: "Todos" })
                ar.push({ encargado: "Sin asignar" })
                for (var i = 0; i < data.length; i++) {
                    if (!(data[i]['encargado'] === ""))
                        ar.push({encargado:data[i]['encargado']})
                }
                this.setState({
                    admins: data,
                    aux:data
                })
                this.depurarCon(ar)
            });
    }

    depurarCon(data){
        var auxi = []
        for (var i = 0; i < data.length; i++) {
            for (var j = (i + 1); j < data.length; j++) {
                if ((data[i]['encargado'] === data[j]['encargado'])) {
                   data[i]['encargado'] = "null"
                }
            }
        }
        console.log(auxi)
        for (var h = 0; h < data.length; h++) {
            if (!(data[h]['encargado'] === "null")) {
                auxi.push(data[h])
            }
        }
        this.setState({encargados:auxi})
        auxi = []
        ar = []
    }

    importarCSV(){
        Axios.get("http://localhost:4000/Crear_Conta/csv").then(res =>{
            console.log(res)
        })
    }


    render() {
        return (
            <div className="Tabla-ad">
                <Barra />
                <button type="button" className="btn btn-primary" onClick={this.importarCSV}>Importar csv</button>
                <div className="row justify-content-center align-items-center">
                    <input placeHolder="Buscar..." className="form-control col-md-4" value={this.state.text} onChange={(text)=>this.filter(text)}/>
                    <button onClick={() => this.ordenarAsc(this.state.admins, 'nombre')} type="button" className="btn btn-primary btn-dark btn-lg">Nombre</button>
                    <button onClick={() => this.ordenarAsc(this.state.admins, 'telefono')} type="button" className="btn btn-primary btn-dark btn-lg">Telefono</button>
                    <button onClick={() => this.ordenarAsc(this.state.admins, 'correo')} type="button" className="btn btn-primary btn-dark btn-lg">Correo Electronico</button>
                    <div>
                        <select className="form-control"
                            id="seleccion">{
                                this.state.encargados.map(admin => {
                                    return (
                                        <option>{admin.encargado}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button onClick={() => this.buscrIndividual(document.getElementById("seleccion").value)} type="button" className="btn btn-primary btn-dark btn-lg">Buscar Individual</button>
                </div>
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