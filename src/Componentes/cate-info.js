import React from 'react'
import Registro from './Barra_Catedratico'
import './Registro_Catedratico.css'
import axios from 'axios'
var nombre_ant = ""

class Registro_Catedratico extends React.Component {

    componentDidMount(){
        axios.get("http://localhost:4000/Crear_Cate/a/nick").then( function (response)
        {
            localStorage.setItem('usuario',response.data);
            var ruta = "http://localhost:4000/Crear_Cate/bus/"+ localStorage.getItem('usuario');

            axios.get(ruta,{
            }).then(function (result){
                    console.log("valor del json " + result.data.nombre)
                    var info = result.data;
                    nombre_ant = info.nick;
                    console.log(nombre_ant)
                    console.log(info)
                    document.getElementById("registro").value = info.registro
                    document.getElementById("nombre").value =  info.nombre
                    document.getElementById("fecha").value = info.fecha 
                    document.getElementById("telefono").value= info.telefono
                    document.getElementById("correo").value = info.correo
                    document.getElementById("uni").value = info.universidad
                    document.getElementById("nick").value = info.nick
                    document.getElementById("contraseña").value = info.contra
                })
        })
    }

    modificarDatos(e){
            var path = "http://localhost:4000/Crear_Cate/actualizar/"+nombre_ant
            console.log(path)
        axios.post(path,{
            registro: window.parent.document.getElementById("registro").value,
            nombre: window.parent.document.getElementById("nombre").value,
            fecha: window.parent.document.getElementById("fecha").value,
            telefono: window.parent.document.getElementById("telefono").value,
            correo: window.parent.document.getElementById("correo").value,
            universidad: window.parent.document.getElementById("uni").value,
            nick: window.parent.document.getElementById("nick").value,
            contra: window.parent.document.getElementById("contraseña").value
        }).then(function (res){
            console.log(res)
        })
       // })
        e.preventDefault();
    }

    eliminar(){
        if( localStorage.getItem('usuario') === "admin"){
            alert('El administrador principal no puede ser eliminado')
        }else{
            var ruta = "http://localhost:4000/Crear_Cate/" + localStorage.getItem('usuario');
            axios.delete(ruta).then(props =>{
                window.location = "/"
            })
        }
    }

    render() {
        return (
            <div className="crear">
                <div className="barra-re">
                    <Registro />
                </div>
                <div className="mt-5">
                    <div class="card  cart mx-auto mb-3">
                        <div class="card-body">
                            <form onSubmit={this.modificarDatos}>
                                <fieldset>
                                    <div className="form-group mx-auto">
                                        <label htmlFor="registro">Registro de personal</label>
                                        <input type="number" className="form-control" id="registro"
                                            aria-describedby="emailHelp" placeholder="Ingresa tu registro de personal" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre</label>
                                        <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fecha">Fecha de nacimiento</label>
                                        <input type="date" className="form-control" id="fecha" placeholder="Ingresa tu fecha de nacimiento" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input type="number" className="form-control" id="telefono" placeholder="Ingresa tu telefono" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="correo">Correo electronico</label>
                                        <input type="text" className="form-control" id="correo" placeholder="Ingresa tu correo electronico" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="unio">Universidad</label>
                                        <input type="text" className="form-control" id="uni" placeholder="Ingresa tu universidad" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="nick">Nickname</label>
                                        <input type="text" className="form-control" id="nick" placeholder="Ingresa tu nickname" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contraseña">Contraseña</label>
                                        <input type="text" className="form-control" id="contraseña" placeholder="Ingresa tu contraseña" />
                                    </div>
                                    <div className="but">
                                        <button type="submit" className="btn but btn-primary">Modificar</button>
                                        <button type="button" onClick={this.eliminar} className="btn but btn-primary">Eliminar</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registro_Catedratico