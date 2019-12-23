import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Barra_Admin extends Component {

    render() {
        return (
            <div className="Barra_Admin">
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <h2 className="text-white">Administrador</h2>
                   <div className="collapse navbar-collapse row justify-content-end" id="navbarNav">
                       <ul className="navbar-nav">
                           <li className="nav-item">
                               <Link className="nav-link" to="/Admin/Perfil">Perfil</Link>
                           </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cuentas</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Crear_Admin">Crear Administrador</Link>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Crear_Colaborador">Crear Colaborador</Link>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Crear_Catedratico">Crear Catedratico</Link>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Crear_Estudiante">Crear Estudiante</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Ver_Admins">Ver Administradores</Link>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Ver_Colaboradores">Ver Colaboradores</Link>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Ver_Catedraticos">Ver Catedraticos</Link>
                                   <Link className="dropdown-item" to="/Admin/Cuentas/Ver_Estudiantes">Ver Estudiantes</Link>
                               </div>
                           </li>
                           <li className="nav-item dropdown">
                               <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Inventario</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Admin/Crear_Bien">Crear bien material</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Admin/Ver_Bienes">Ver bienes materiales</Link>
                               </div>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/Admin/Noticias">Noticias</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/Admin/Carga">Carga masiva</Link>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contactos</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Admin/Crear_Contacto">Crear contacto</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Admin/Ver_Contactos">Ver contacto</Link>
                                   </div>
                           </li>
                           <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Presupesto</a>
                               <div className="dropdown-menu">
                                   <Link className="dropdown-item" to="/Admin/Crear_Orden">Orden de pago</Link>
                                   <Link className="dropdown-item" to="/Admin/Crear_Ingreso">Ingreso</Link>
                                   <Link className="dropdown-item" to="/Admin/Crear_Egreso">Egreso</Link>
                                   <div className="dropdown-divider"></div>
                                   <Link className="dropdown-item" to="/Admin/Ver_Ingresos">Ver Ingresos</Link>
                                   <Link className="dropdown-item" to="/Admin/Ver_Egresos">Ver Egresos</Link>
                                   <Link className="dropdown-item" to="/Admin/Ver_Proyeccion">Proyeccion</Link>
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

export default Barra_Admin;