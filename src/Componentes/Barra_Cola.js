import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Barra_Cola extends Component {

    render() {
        return (
            <div className="Barra_Admin">
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <h2 className="text-white">Colaborador</h2>
                   <div className="collapse navbar-collapse row justify-content-end" id="navbarNav">
                       <ul className="navbar-nav">
                           <li className="nav-item">
                               <Link className="nav-link" to="/Cola/Perfil">Perfil</Link>
                           </li>
                           <li className="nav-item dropdown">
                               <Link className="nav-link" to="/Cola/Inventario">Inventario</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/Cola/Noticias">Noticias</Link>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contactos</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Cola/Ver_Contactos">Ver contactos</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Cola/Contactos_Asignados">Contactos asignados</Link>
                                   </div>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Presupesto</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Cola/Crear_Orden">Orden de pago</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Cola/Ver_Ingresos">Ver Ingresos</Link>
                                   <Link className="dropdown-item" to="/Cola/Ver_Egresos">Ver Egresos</Link>
                                   <Link className="dropdown-item" to="/Cola/Ver_Proyeccion">Proyeccion</Link>
                                   </div>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Admin/Crear_Curso">Crear curso</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Admin/Ver_Cursos">Ver cusos</Link>
                                   </div>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/Admin/Actividades">Actividades</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/Admin/Dashboard">Dashboard</Link>
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

export default Barra_Cola;