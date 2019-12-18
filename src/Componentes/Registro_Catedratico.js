import React from 'react'
import Registro from './Registro'
import './Registro_Catedratico.css'

class Registro_Catedratico extends React.Component {

    state = {
        date: new Date(),
    }
    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <Registro />
                <form>
                <div className="Formulario">
                    <div>
                        <label htmlFor="carne" className="lab-carne">Registro de personal </label>
                        <input className='carne' name="carne" id="carne" type="text" />
                    </div>
                    <div>
                        <label htmlFor="nombre" className="lab-nombre">Nombre </label>
                        <input className='nombre' name="nombre" id="nombre" type="text" />
                    </div>
                    <div>
                        <label htmlFor='fecha' className="lab-naci">Fecha de nacimiento</label>                        
                        <input className='fecha' name="fecha" id="fecha" type="text" />
                    </div>
                    <div>
                        <label htmlFor="correo" className="lab-correo">Correo electronico </label>
                        <input className='correo' name="correo" id="correo" type="text" />
                    </div>
                    <div>
                        <label htmlFor="universidad" className="lab-uni">Universidad </label>
                        <input className='universidad' name="universidad" id="universidad" type="text" />
                    </div>
                    <div>
                        <label htmlFor="nickname" className="lab-nick">Nickname </label>
                        <input className='nickname' name="nickname" id="nickname" type="text" />
                    </div>
                    <div>
                        <label htmlFor="contra" className="lab-contra">Contraseña</label>
                        <input className='contra' name="contra" id="contra" type="text" />
                    </div>
                    <div>
                        <button type="button" className="btn1 btn-dark btn-lg">Registrarse</button>
                    </div>
                </div>
                </form>
            </div>  
        )
    }
}

export default Registro_Catedratico