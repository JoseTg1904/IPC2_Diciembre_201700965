import React from 'react';
import './App.css';
import Inicio from './Inicio';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
/* <Link to="/Registro_Estudiante"></Link>*/

class App extends React.Component {
  state = {
    isOpen: false
  };
  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="App">
        < Inicio />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="dropdown" onClick={this.toggleOpen}>
          <Link to="/Ingreso"><button type="button" className="btn btn-primary btn-dark btn-lg">Ingreso</button></Link>
          <button
            className="btn btn-primary dropdown-toggle btn-dark btn-lg"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Registro
        </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/Registro_Estudiante">Estudiante</Link>
            <Link className="dropdown-item" to="/Registro_Catedratico">Catedratico</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;