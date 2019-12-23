import React from 'react'
import Registro from './Registro'
import './Registro_Catedratico.css'

class Registro_Catedratico extends React.Component {

    render() {
        return (
            <div>
                <Registro />
                <form>
                <div className="Formulario">
                    <div>
                        <label htmlFor="registro" className="lab-registro">Registro de personal</label>
                        <input className='registro' name="registro" id="registro" type="text" />
                    </div>
                    <div>
                        <label htmlFor="nombre-ca" className="lab-nombre-ca">Nombre</label>
                        <input className='nombre-ca' name="nombre-ca" id="nombre-ca" type="text" />
                    </div>
                    <div>
                        <label htmlFor='fecha-ca' className="lab-naci-ca">Fecha de nacimiento</label>                        
                        <input className='fecha-ca' name="fecha-ca" id="fecha-ca" type="text" />
                    </div>
                    <div>
                        <label htmlFor="correo-ca" className="lab-correo-ca">Correo electronico</label>
                        <input className='correo-ca' name="correo-ca" id="correo-ca" type="text" />
                    </div>
                    <div>
                        <label htmlFor="universidad-ca" className="lab-uni-ca">Universidad</label>
                        <input className='universidad-ca' name="universidad-ca" id="universidad-ca" type="text" />
                    </div>
                    <div>
                        <label htmlFor="nickname-ca" className="lab-nick-ca">Nickname</label>
                        <input className='nickname-ca' name="nickname-ca" id="nickname-ca" type="text" />
                    </div>
                    <div>
                        <label htmlFor="contra-ca" className="lab-contra-ca">Contraseña</label>
                        <input className='contra-ca' name="contra-ca" id="contra-ca" type="text" />
                    </div>
                    <div>
                        <button type="submit" className="btn2 btn-dark btn-lg">Registrarse</button>
                    </div>
                </div>
                </form>
            </div>  
        )
    }
}

export default Registro_Catedratico