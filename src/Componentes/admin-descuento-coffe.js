import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';

class orden extends React.Component {

    constructor() {
        super()
        this.state = {
            estudiantes: [],
            insumo: []
        }
        this.obtenerDatos = this.obtenerDatos.bind(this)
    }

    componentDidMount() {
        axios.get("http://localhost:4000/Crear_Estu").then(res => {
            var aux1 = []
            for (var i = 0; i < res.data.length; i++) {
                if (res.data[i]['pago'] === true ) {
                    aux1.push(res.data[i])
                }
            }
            this.setState({ estudiantes: aux1 })
        })
        axios.get("http://localhost:4000/Crear_Bien").then(res1 => {
            var aux = []
            for (var i = 0; i < res1.data.length; i++) {
                if (res1.data[i]['tipo'] === "Coffe break" && res1.data[i]['restante']>0) {
                    aux.push(res1.data[i])
                }
            }
            this.setState({ insumo: aux })
        })
    }

    obtenerDatos(e) {
        var codigo = ""
        var objeto = ""
        for (var i = 0; i < this.state.insumo.length; i++) {
            if (document.getElementById("bien").value === this.state.insumo[i]['descripcion']) {
                codigo = this.state.insumo[i].codigo
                objeto = this.state.insumo[i]
            }
        }
        console.log(codigo)
        console.log(objeto)
        var f = new Date();
        var fech = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear()
        var hor = f.getHours() + ":" + f.getMinutes()
        axios.post( "http://localhost:4000/Entregas/cafe" , {
            carne: document.getElementById("carne").value,
            entrega: objeto,
            fecha:fech,
            hora: hor 
        }).then(res => {
            if (res.data === 1000) {
                console.log('chido')
                var ruta = "http://localhost:4000/Crear_Bien/descontar/" + codigo
                axios.get(ruta).then(res =>{
                    console.log(res)
                })
            } else {
                alert('el estudiante ya a recibido sus dos coffe break del dia')
            }
        })
            e.preventDefault();
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card  text-white bg-secondary carta5 mx-auto mb-3">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="carne">Estudiantes</label>
                                        <select className="form-control"
                                            id="carne">{
                                                this.state.estudiantes.map(admin => {
                                                    return (
                                                        <option>{admin.carne}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="bien">Coffe Break</label>
                                        <select className="form-control"
                                            id="bien">{
                                                this.state.insumo.map(admin => {
                                                    return (
                                                        <option>{admin.descripcion}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Registrar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default orden;