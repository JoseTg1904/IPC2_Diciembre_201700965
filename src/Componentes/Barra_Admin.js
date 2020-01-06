import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Barra_Admin extends Component {

    render() {
        return (
            <div className="Barra_Admin">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <h3>Admin</h3>
                    <div className="collapse navbar-collapse row justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/Admin/Perfil">Perfil</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="# " data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cuentas</a>
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
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Inventario</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Bien">Crear bien material</Link>
                                    <Link className="dropdown-item" to="/Admin/Crear_Insumo">Crear insumo</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Entrega_Coffe">Entrega coffe break</Link>
                                    <Link className="dropdown-item" to="/Admin/Entrega_Almuerzo">Entrega almuerzo</Link>
                                    <Link className="dropdown-item" to="/Admin/Entrega_Insumo">Entrega insumo</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Bienes">Ver bienes materiales</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Entregas">Ver entregas</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Noticias</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Noticia">Crear noticia</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Noticias">Ver noticias</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Contactos</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Contacto">Crear contacto</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Contactos">Ver contacto</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" 
                                role="button" aria-haspopup="true" aria-expanded="false">Presupesto</a>
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
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" 
                                role="button" aria-haspopup="true" aria-expanded="false">Cursos</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Curso">Crear curso</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Cursos">Ver cusos</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" 
                                role="button" aria-haspopup="true" aria-expanded="false">Actividades</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Actividad">Crear actividad</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Editar_Actividad">Editar actividades</Link>
                                    <Link className="dropdown-item" to="/Admin/Ver_Actividades">Ver actividades</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Registro_Actividad">Registrar actividad</Link>
                                    <Link className="dropdown-item" to="/Admin/Ver_Asistencia">Ver asistencia</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Puntuar_Actividad">Puntuar actividad</Link>
                                    <Link className="dropdown-item" to="/Admin/Ver_Puntuacion">Ver Puntuaciones</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" 
                                data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dashboard</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Tarea">Crear tareas</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Tareas">Ver tareas</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" 
                                data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Mensajes</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Crear_Mensaje">Crear mensaje</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Ver_Mensaje">Ver mensajes</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="# " className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                                    aria-expanded="false">Reportes</a>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/Admin/Reporte/Ingreso_Entrada">Ingreso por entradas</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Egresos">Total egresos</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Ingresos">Total ingresos</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Asistentes_Nacionalidad">Asistentes por nacionalidad</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Asistentes_Universidad">Asistentes por universidad</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Asistentes_X_Actividad">Asistentes por actividad</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Estudiantes_vs_Asistentes">Estudiantes vs Asistentes</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Estudiantes_Curso">Estudiantes por curso</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Actividad_X_Estudiante">Actividades por estudiante</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Conferencias_MejorPuntuadas">Conferencias mejor punteadas</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Talleres_MejorPuntuadas">Talleres mejor punteados</Link>
                                    <Link className="dropdown-item" to="/Admin/Reporte/Visitas_MejorPuntuadas">Visitas tecnicas mejor punteadas</Link>
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

export default Barra_Admin;