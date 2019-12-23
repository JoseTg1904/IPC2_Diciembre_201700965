import React from 'react'
import Registro from './Registro'
import './Registro_Estudiante.css'

class Registro_Estudiante extends React.Component {

    /* ese me devuelve el archivo json  <p>{JSON.stringify(this.state)}</p> */

    constructor(props) {
        super(props);

        this.state = {
            carne: '',
            nombre: '',
            fecha: '',
            telefono: '',
            correo: '',
            universidad: '',
            nacionalidad: '',
            nickname: '',
            contra: ''
        };

        this.handleCarneChange = this.handleCarneChange.bind(this);
        this.handleNombreChange = this.handleNombreChange.bind(this);
        this.handleFechaChange = this.handleFechaChange.bind(this);
        this.handleTelefonoChange = this.handleTelefonoChange.bind(this);
        this.handleCorreoChange = this.handleCorreoChange.bind(this);
        this.handleUniversidadChange = this.handleUniversidadChange.bind(this);
        this.handleNacionalidadChange = this.handleNacionalidadChange.bind(this);
        this.handleNickChange = this.handleNickChange.bind(this);
        this.handleContraChange = this.handleContraChange.bind(this);
        this.clickRealizado = this.clickRealizado.bind(this);
    }

    handleCarneChange(event) {
        this.setState({ carne: event.target.value });
    };

    handleNombreChange(event) {
        this.setState({ nombre: event.target.value });
    };

    handleFechaChange(event) {
        this.setState({ fecha: event.target.value });
    };

    handleTelefonoChange(event) {
        this.setState({ telefono: event.target.value });
    };
    handleCorreoChange(event) {
        this.setState({ correo: event.target.value });
    };

    handleUniversidadChange(event) {
        this.setState({ universidad: event.target.value });
    };

    handleNacionalidadChange(event) {
        this.setState({ nacionalidad: event.target.value });
    };

    handleNickChange(event) {
        this.setState({ nickname: event.target.value });
    };

    handleContraChange(event) {
        this.setState({ contra: event.target.value });
    };

    clickRealizado() {
            // Obtenemos los valores del formulario
           /* var estudiante = {
                carne: React.findDOMNode(this.refs.carne).value,
                nombre: React.findDOMNode(this.refs.nombre).value,
                fecha: React.findDOMNode(this.refs.fecha).value,
                telefono: React.findDOMNode(this.refs.telefono).value,
                correo: React.findDOMNode(this.refs.correo).value,
                universidad: React.findDOMNode(this.refs.universidad).value,
                nacionalidad: React.findDOMNode(this.refs.nacionalidad).value,
                nickname: React.findDOMNode(this.refs.nickname).value,
                contra: React.findDOMNode(this.refs.contra).value
               // id: new Date().getTime(), // Generamos una id rápida
            };*/
            // Leemos la lista de notas guardadas o creamos una vacía
      /*      var estudiantes = window.localStorage.getItem('estudiantes');
    
            if (estudiantes === null) {
                estudiantes = []; // Creamos una nueva lista vacía
            } else {
                estudiantes = JSON.parse(estudiantes); // Decodificamos la cadena
            }
    */
            // Insertamos la nueva nota al principio de la lista
      /*      estudiantes.unshift(estudiante);
    */
            // Codificamos la lista como cadena de texto
      /*      estudiantes = JSON.stringify(estudiantes);
    */
            // Guardamos en localStorage
      /*      window.localStorage.setItem('estudiantes', estudiantes);
    */
            // Vaciamos el formulario
      /*        React.findDOMNode(this.refs.carne).value = '';
                React.findDOMNode(this.refs.nombre).value='';
                React.findDOMNode(this.refs.fecha).value='';
                React.findDOMNode(this.refs.telefono).value='';
                React.findDOMNode(this.refs.correo).value='';
                React.findDOMNode(this.refs.universidad).value='';
                React.findDOMNode(this.refs.nacionalidad).value='';
                React.findDOMNode(this.refs.nickname).value='';
                React.findDOMNode(this.refs.contra).value='';
    */
            // Y finalmente lo cerramos
            /*this.close();*/
    };

    render() {
        return (
            <div>
                <Registro />
                <form>
                    <div className="Formulario">
                        <div>
                            <label htmlFor="carne" className="lab-carne" >Número de carne</label>
                            <input className='carne' name="carne" id="carne" type="text" value={this.state.carne} onChange={this.handleCarneChange}
                            ref="carne" />
                        </div>
                        <div>
                            <label htmlFor="nombre" className="lab-nombre" >Nombre</label>
                            <input className='nombre' name="nombre" id="nombre" type="text" value={this.state.nombre} onChange={this.handleNombreChange} />
                        </div>
                        <div>
                            <label htmlFor='fecha' className="lab-naci" >Fecha de nacimiento</label>
                            <input className='fecha' name="fecha" id="fecha" type="text" placeholder=" dd/mm/yyyy"
                                value={this.state.fecha} onChange={this.handleFechaChange} />
                        </div>
                        <div>
                            <label htmlFor="telefono" className="lab-tel">Telefono</label>
                            <input className='telefono' name="telefono" id="telefono" type="text"
                                value={this.state.telefono} onChange={this.handleTelefonoChange} />
                        </div>
                        <div>
                            <label htmlFor="correo" className="lab-correo">Correo electronico</label>
                            <input className='correo' name="correo" id="correo" type="text"
                                value={this.state.correo} onChange={this.handleCorreoChange} />
                        </div>
                        <div>
                            <label htmlFor="universidad" className="lab-uni">Universidad</label>
                            <input className='universidad' name="universidad" id="universidad" type="text"
                                value={this.state.universidad} onChange={this.handleUniversidadChange} />
                        </div>
                        <div>
                            <label htmlFor="nacionalidad" className="lab-nac">Nacionalidad</label>
                            <input className='nacionalidad' name="nacionalidad" id="nacionalidad" type="text"
                                value={this.state.nacionalidad} onChange={this.handleNacionalidadChange} />
                        </div>
                        <div>
                            <label htmlFor="nickname" className="lab-nick">Nickname</label>
                            <input className='nickname' name="nickname" id="nickname" type="text"
                                value={this.state.nickname} onChange={this.handleNickChange} />
                        </div>
                        <div>
                            <label htmlFor="contra" className="lab-contra">Contraseña</label>
                            <input className='contra' name="contra" id="contra" type="text"
                                value={this.state.contra} onChange={this.handleContraChange} />
                        </div>
                        <div>
                            <button onClick={this.clickRealizado} type="submit" className="btn1 btn-dark btn-lg">Registrarse</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Registro_Estudiante