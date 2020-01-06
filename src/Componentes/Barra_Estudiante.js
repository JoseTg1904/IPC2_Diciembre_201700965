import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Barra_Estu extends Component {

    render() {
        return (
            <div className="Barra_Estu">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h2 className="text-white">Estudiante</h2>
                    <div className="collapse navbar-collapse row justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Estu/Perfil">Perfil</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="# "
                                    data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">Noticias</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Estu/Ver_Noticias">Comentar noticias</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Estu/Ver_Cursos">Ver cursos</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Estu/Cursos_Asignados">Cursos asignados</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">Actividades</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Estu/Ver_Actividades">Ver actividades</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Estu/Actividades_Asignadas">Actividades asignadas</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                           <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mensajes</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Estu/Crear_Mensaje">Crear mensaje</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Estu/Ver_Mensaje">Ver mensajes</Link>
                                   </div>
                           </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Cerrar sesion</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Barra_Estu;