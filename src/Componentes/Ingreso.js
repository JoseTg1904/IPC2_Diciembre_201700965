import React, { Component } from 'react';
import './Ingreso.css';
import Inicio from './Inicio.js';
import 'bootswatch/dist/slate/bootstrap.min.css';

class Ingreso extends Component {
    render() {
        return (
            <div className="Ingreso">
                < Inicio />
                <div class="mt-5">
                    <div class="card  login mx-auto mb-3">
                        <div class="card-header">Iniciar sesión</div>
                        <div class="card-body">
                            <form>
                                <fieldset>
                                   <div className="grupo-texto"> 
                                    <div class="form-group">
                                        <label>Usuario</label>
                                        <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Ingrese usuario" />
                                    </div>
                                    <div class="form-group">
                                        <label>Contraseña</label>
                                        <input type="password" class="form-control" aria-describedby="emailHelp" placeholder="Ingrese contraseña" />
                                    </div>
                                    </div>
                                    <div className="boton-in">
                                    <button type="submit" class="btn btn-primary">Ingresar</button>
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
export default Ingreso;
