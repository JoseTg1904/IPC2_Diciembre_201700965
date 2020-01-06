import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Barra_Cola extends Component {

    exportar(par) {
       var ruta = "http://localhost:4000/"+par 
        fetch(ruta)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }

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
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="# " data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">Noticias</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Cola/Crear_Noticia">Crear Noticia</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Cola/Ver_Noticias">Comentar noticias</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="# " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contactos</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Cola/Ver_Contactos">Ver contactos</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Cola/Contactos_Asignados">Contactos asignados</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="# " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Presupesto</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Cola/Crear_Orden">Orden de pago</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Cola/Ver_Ingresos">Ver Ingresos</Link>
                                    <Link className="dropdown-item" to="/Cola/Ver_Egresos">Ver Egresos</Link>
                                    <Link className="dropdown-item" to="/Cola/Ver_Proyeccion">Proyeccion</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Cola/Ver_Cursos">Ver cursos</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Cola/Cursos_Asignados">Cursos asignados</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">Carga masiva</a>
                                <div className="dropdown-menu">
                                    <Link onClick={() => this.exportar("Crear_Admin/csv")} className="dropdown-item" to="#">Exportar administradores</Link>
                                    <Link onClick={() => this.exportar("Crear_Cola/csv")} className="dropdown-item" to="#">Exportar colaboradores</Link>
                                    <Link onClick={() => this.exportar("Crear_Cate/csv")} className="dropdown-item" to="#">Exportar catedraticos</Link>
                                    <Link onClick={() => this.exportar("Crear_Estu/csv")} className="dropdown-item" to="#">Exportar estudiantes</Link>
                                    <Link onClick={() => this.exportar("Crear_Conta/csv")} className="dropdown-item" to="#">Exportar contactos</Link>
                                    <Link onClick={() => this.exportar("Crear_Curso/csv")} className="dropdown-item" to="#">Exportar cursos</Link>
                                    <Link onClick={() => this.exportar("Actividades/csv")} className="dropdown-item" to="#">Exportar actividades</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mensajes</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Cola/Crear_Mensaje">Crear mensaje</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Cola/Ver_Mensaje">Ver mensajes</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Cola/Dashboard">Dashboard</Link>
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