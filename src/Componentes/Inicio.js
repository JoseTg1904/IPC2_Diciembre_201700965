import React, { Component } from 'react';
import './Inicio.css';
import {Link} from 'react-router-dom';

/*
despues del </a>
<span class="sr-only ">(current)</span>
*/

class Inicio extends Component {
    render() {
        return (
            <div className="Inicio">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h1 className="text-white">Coecys</h1>
                    <div class="collapse navbar-collapse row justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <Link class="nav-link font-size=50px" font-size="50px" to="/Principal">Inicio</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Calendario">Calendario</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Noticia">Noticias</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Inicio;