import React, { Component } from 'react';
import './Inicio.css';
import {Link} from 'react-router-dom';

class Inicio extends Component {
    render() {
        return (
            <div className="Inicio">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="text-white">Coecys</h1>
                    <div className="collapse navbar-collapse row justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link font-size=50px" fontSize="50px" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Calendario">Calendario</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Noticia">Noticias</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Inicio;