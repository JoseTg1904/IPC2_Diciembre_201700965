import React from 'react';
import Barra from './Barra_Admin';
import './admin-crear-orden.css'
import axios from 'axios';

class egreso extends React.Component {

    componentDidMount(){
        fetch("http://localhost:4000/Presupuesto/estimado")
            .then(res => res.json())
            .then(data => {
                document.getElementById("alcance").value = data;
            })
            fetch("http://localhost:4000/Presupuesto/cant_ingresos")
            .then(res => res.json())
            .then(data => {
                document.getElementById("ingresos").value = data;
            })   
            fetch("http://localhost:4000/Presupuesto/cant_egresos")
            .then(res => res.json())
            .then(data => {
                document.getElementById("egresos").value = data;
            }) 
            fetch("http://localhost:4000/Presupuesto/restante")
            .then(res => res.json())
            .then(data => {
                document.getElementById("restante").value = data;
                console.log(data)
            })
        }

        componentDidUpdate(){
            fetch("http://localhost:4000/Presupuesto/estimado")
            .then(res => res.json())
            .then(data => {
                document.getElementById("alcance").value = data;
            })
            fetch("http://localhost:4000/Presupuesto/cant_ingresos")
            .then(res => res.json())
            .then(data => {
                document.getElementById("ingresos").value = data;
            })   
            fetch("http://localhost:4000/Presupuesto/cant_egresos")
            .then(res => res.json())
            .then(data => {
                document.getElementById("egresos").value = data;
            }) 
            fetch("http://localhost:4000/Presupuesto/restante")
            .then(res => res.json())
            .then(data => {
                document.getElementById("restante").value = data;
                console.log(data)
            })
        }

    modificarDatos(){
        var ruta = "http://localhost:4000/Presupuesto/" + document.getElementById("alcance").value
        axios.post(ruta,{
            
        })
        window.location.reload(true)
    }

    render() {
        return (
            <div className="crear">
                <Barra />
                <div className="mt-5">
                    <div className="card carta4 mx-auto mb-3 text-white bg-primary">
                        <div className="card-header">Alcance</div>
                        <div className="card-body">
                            <input type="number" className="form-control" id="alcance"  />
                            <button type="button" onClick={this.modificarDatos} className="btn btn-primary" >Modificar</button>
                        </div>
                    </div>
                    <div className="card  text-white bg-secondary carta5 mx-auto mb-3">
                        <div className="card-header">Valores</div>
                        <div className="card-body">
                            <form onSubmit={this.obtenerDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="ingresos">Ingresos</label>
                                        <input readOnly type="number" className="form-control" id="ingresos" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="egresos" >Egresos</label>
                                        <input readOnly type="number" className="form-control" id="egresos" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="restante">Restante</label>
                                        <input readOnly type="text" className="form-control" id="restante" />
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

export default egreso;