import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Principal from '../Paginas/Principal'
import Re_Es from '../Paginas/Re_Es'
import Re_Ca from '../Paginas/Re_Ca'
import Ingreso from '../Paginas/In'
import NotFound from '../Paginas/NotFound'
import Ad_Prin from '../Paginas/Admin_Principal'
import Cola_Prin from '../Paginas/Cola_Principal'
import Ad_Cre_Ad from '../Paginas/Ad_Cre_Ad'
import Ad_Info from '../Paginas/Admin_Perfil'
import Ad_Ads from '../Paginas/Ad_Ads'
import Ad_Mod from '../Paginas/Ad_Mod_Ad'
import Ad_Mod_Cola from '../Paginas/Ad_Mod_Colas'
import Ad_Cre_Cola from '../Paginas/Ad_Cre_Cola'
import Ad_Colas from '../Paginas/Ad_Colas'
import Ad_Cre_Estu from '../Paginas/Ad_Cre_Estu'
import Ad_Estus from '../Paginas/Ad_Estus'
import Ad_Mod_Estu from '../Paginas/Ad_Mod_Estus'
import Ad_Cre_Cate from '../Paginas/Ad_Cre_Cates'
import Ad_Cates from '../Paginas/Ad_Cates'
import Ad_Mod_Cate from '../Paginas/Ad_Mod_Cates'
import Ad_Cre_Bien from '../Paginas/Ad_Cre_Bien'
import Ad_Bienes from '../Paginas/Ad_Bienes'
import Ad_Mod_Bienes from '../Paginas/Ad_Mod_Bienes'
import Ad_Cre_Con from '../Paginas/Ad_Cre_Con'
import Ad_Conta from '../Paginas/Ad_Conta'
import Ad_Mod_Conta from '../Paginas/Ad_Mod_Conta'
import Ad_Cre_Curso from '../Paginas/Ad_Cre_Curso'
import Ad_Curso from '../Paginas/Ad_Cursos'
import Ad_Mod_Curso from '../Paginas/Ad_Mod_Cursos'
import Ad_Cre_Orden from '../Paginas/Ad_Cre_Orden'
import Ad_Cre_In from '../Paginas/Ad_Cre_In'
import Ad_Cre_Eg from '../Paginas/Ad_Cre_Eg'
import Ad_Ing from '../Paginas/Ad_In'
import Ad_Egr from '../Paginas/Ad_Eg'
import Ad_Proye from '../Paginas/Ad_Proye'
import Cola_Perfil from '../Paginas/Cola_Perfil'
import Cola_Bienes from '../Paginas/Cola_Bienes'
import Cola_Ver_Contas from '../Paginas/Cola_Conta'
import Cola_Orden from '../Paginas/Cola_Cre_Orde'
import Cola_Ing from '../Paginas/Cola_In'
import Cola_Egr from '../Paginas/Cola_Eg'
import Cola_Proye from '../Paginas/Cola_Proye'
import Cola_Conta_Prop from '../Paginas/Cola_Conta_Propios'
import Cola_Cursos from '../Paginas/Cola_Cursos'
import Cola_Cursos_As from '../Paginas/Cola_Cursos_Propios'
import Ad_Cre_Not from '../Paginas/Ad_Cre_Noticias'
import Ad_Cre_Com from '../Paginas/Ad_Cre_Com'
import Noti from '../Paginas/Noticias'
import Ad_Cre_Ac from '../Paginas/Ad_Cre_Ac'
import Ad_Actividades from '../Paginas/Ad_Actividades'
import Ad_Cre_Tarea from '../Paginas/Ad_Cre_Tarea'
import Ad_Tareas from '../Paginas/Ad_Tareas'
import Calendario from '../Paginas/Calendario'
import Editar_Actividades from '../Paginas/Ad_Ed_Actividades'
import Ad_Mod_Actividades from '../Paginas/Ad_Mod_Actividades'
import Cola_Cre_Not from '../Paginas/Cola_Cre_Noticia'
import Cola_Cre_Com from '../Paginas/Cola_Crear_Comen'
import Cate_Inicio from '../Paginas/Cate_Principal'
import Cate_Perfil from '../Paginas/Cate_Perfil'
import Cate_Cursos from '../Paginas/Cate_Cursos'
import Cate_Cursos_Propios from '../Paginas/Cate_Info_Curso_Propio'
import Cate_Comen from '../Paginas/Cate_Cre_Comen'
import Estu_Principal from '../Paginas/Estu_Principal'
import Estu_Perfil from '../Paginas/Estu_Perfil'
import Estu_Comentario from '../Paginas/Estu_Crear_Comen'
import Estu_Cursos from '../Paginas/Estu_Cursos'
import Estu_Cursos_Propios from '../Paginas/Estu_Cursos_Propios'
import Estu_Actividades from '../Paginas/Estu_Actividades'
import Estu_Actividades_Propias from '../Paginas/Estu_Actividades_Propias'
import Ad_Cre_Mensaje from '../Paginas/Ad_Crear_Mensaje'
import Ad_Mensajes from '../Paginas/Ad_Mensajes'
import Cola_Cre_Mensaje from '../Paginas/Cola_Cre_Men'
import Cola_Mensajes from '../Paginas/Cola_Men'
import Estu_Cre_Mensaje from '../Paginas/Estu_Cre_Men'
import Estu_Mensajes from '../Paginas/Estu_Mensajes'
import Cate_Cre_Mensaje from '../Paginas/Cate_Crear_Mensaje'
import Cate_Mensajes from '../Paginas/Cate_Mensajes'
import Ad_Cre_Insumo from '../Paginas/Ad_Cre_Insumo'
import Ad_Re_InEn from '../Paginas/Ad_Re_InEn'
import Ad_Re_Eg from '../Paginas/Ad_Re_Eg'
import Ad_Re_In from '../Paginas/Ad_Re_In'
import Ad_Re_AsNac from '../Paginas/Ad_Re_AsNac'
import Ad_Re_AsUn from '../Paginas/Ad_Re_AsUn'
import Ad_Re_EsCur from '../Paginas/Ad_Re_EsCur'
import Ad_Re_EsVsAs from '../Paginas/Ad_Re_EsVsAs'
import Ad_De_Cof from '../Paginas/Ad_Des_Cof'
import Ad_De_Al from '../Paginas/Ad_Des_Al'
import Ad_De_In from '../Paginas/Ad_Des_Ins'
import Ad_Asi_Ac from '../Paginas/Ad_Asi_Ac'
import Ad_Re_AsXAc from '../Paginas/Ad_Re_AsXAc'
import Ad_Re_AcXEs from '../Paginas/Ad_Re_AcXEs'
import Ad_Pun_Ac from '../Paginas/Ad_Pun_Ac'
import Ad_Re_ConMP from '../Paginas/Ad_Re_ConMP'
import Ad_Re_TalMP from '../Paginas/Ad_Re_TalMP'
import Ad_Re_ViMP from '../Paginas/Ad_Re_ViMP'
import Ad_Mod_In from '../Paginas/Ad_Mod_In'
import Cate_Re_EsCu from '../Paginas/Cate_Re_EsXCu'
import Ad_Entregas from '../Paginas/Ad_Entregas'
import Ad_Asistencia from '../Paginas/Ad_Asitencia'
import Ad_Puntuaciones from '../Paginas/Ad_Puntuaciones'


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/Registro_Estudiante" component={Re_Es} />
                <Route exact path="/Registro_Catedratico" component={Re_Ca} />
                <Route exact path="/Ingreso" component={Ingreso} />
                <Route exact path="/Admin/Inicio" component={Ad_Prin} />
                <Route exact path="/Admin/Cuentas/Crear_Admin" component={Ad_Cre_Ad} />
                <Route exact path="/Admin/Perfil" component={Ad_Info} />
                <Route exact path="/Admin/Cuentas/Ver_Admins" component={Ad_Ads} />
                <Route exact path="/Admin/Cuentas/Modificar_Admin" component={Ad_Mod} />
                <Route exact path="/Admin/Cuentas/Modificar_Colaborador" component={Ad_Mod_Cola} />
                <Route exact path="/Admin/Cuentas/Modificar_Estudiante" component={Ad_Mod_Estu} />
                <Route exact path="/Admin/Cuentas/Modificar_Catedratico" component={Ad_Mod_Cate} />
                <Route exact path="/Admin/Cuentas/Crear_Colaborador" component={Ad_Cre_Cola} />
                <Route exact path="/Admin/Cuentas/Ver_Colaboradores" component={Ad_Colas} />
                <Route exact path="/Admin/Cuentas/Crear_Estudiante" component={Ad_Cre_Estu} />
                <Route exact path="/Admin/Cuentas/Ver_Estudiantes" component={Ad_Estus} />
                <Route exact path="/Admin/Cuentas/Crear_Catedratico" component={Ad_Cre_Cate} />
                <Route exact path="/Admin/Cuentas/Ver_Catedraticos" component={Ad_Cates} />
                <Route exact path="/Admin/Crear_Bien" component={Ad_Cre_Bien} />
                <Route exact path="/Admin/Ver_Bienes" component={Ad_Bienes} />
                <Route exact path="/Admin/Modificar_Bien" component={Ad_Mod_Bienes} />
                <Route exact path="/Admin/Crear_Contacto" component={Ad_Cre_Con} />
                <Route exact path="/Admin/Ver_Contactos" component={Ad_Conta} />
                <Route exact path="/Admin/Modificar_Contacto" component={Ad_Mod_Conta} />
                <Route exact path="/Admin/Crear_Curso" component={Ad_Cre_Curso} />
                <Route exact path="/Admin/Ver_Cursos" component={Ad_Curso} />
                <Route exact path="/Admin/Modificar_Curso" component={Ad_Mod_Curso} />
                <Route exact path="/Admin/Crear_Orden" component={Ad_Cre_Orden} />
                <Route exact path="/Admin/Crear_Ingreso" component={Ad_Cre_In} />
                <Route exact path="/Admin/Crear_Egreso" component={Ad_Cre_Eg} />
                <Route exact path="/Admin/Ver_Ingresos" component={Ad_Ing} />
                <Route exact path="/Admin/Ver_Egresos" component={Ad_Egr} />
                <Route exact path="/Admin/Ver_Proyeccion" component={Ad_Proye} />
                <Route exact path="/Cola/Inicio" component={Cola_Prin} />
                <Route exact path="/Cola/Perfil" component={Cola_Perfil} />
                <Route exact path="/Cola/Inventario" component={Cola_Bienes} />
                <Route exact path="/Cola/Ver_Contactos" component={Cola_Ver_Contas} />
                <Route exact path="/Cola/Contactos_Asignados" component={Cola_Conta_Prop} />
                <Route exact path="/Cola/Crear_Orden" component={Cola_Orden} />
                <Route exact path="/Cola/Ver_Ingresos" component={Cola_Ing} />
                <Route exact path="/Cola/Ver_Egresos" component={Cola_Egr} />
                <Route exact path="/Cola/Ver_Proyeccion" component={Cola_Proye} />
                <Route exact path="/Cola/Ver_Cursos" component={Cola_Cursos} />
                <Route exact path="/Cola/Cursos_Asignados" component={Cola_Cursos_As} />
                <Route exact path="/Admin/Crear_Noticia" component={Ad_Cre_Not} />
                <Route exact path="/Admin/Ver_Noticias" component={Ad_Cre_Com} />
                <Route exact path="/Noticia" component={Noti} />
                <Route exact path="/Admin/Crear_Actividad" component={Ad_Cre_Ac} />
                <Route exact path="/Admin/Ver_Actividades" component={Ad_Actividades} />
                <Route exact path="/Admin/Crear_Tarea" component={Ad_Cre_Tarea} />
                <Route exact path="/Admin/Ver_Tareas" component={Ad_Tareas} />
                <Route exact path="/Calendario" component={Calendario} />
                <Route exact path="/Admin/Editar_Actividad" component={Editar_Actividades} />
                <Route exact path="/Admin/Modificar_Actividad" component={Ad_Mod_Actividades} />
                <Route exact path="/Cola/Crear_Noticia" component={Cola_Cre_Not} />
                <Route exact path="/Cola/Ver_Noticias" component={Cola_Cre_Com} />
                <Route exact path="/Cate/Inicio" component={Cate_Inicio} />
                <Route exact path="/Cate/Perfil" component={Cate_Perfil} />
                <Route exact path="/Cate/Ver_Cursos" component={Cate_Cursos} />
                <Route exact path="/Cate/Cursos_Asignados" component={Cate_Cursos_Propios} />
                <Route exact path="/Cate/Ver_Noticias" component={Cate_Comen} />
                <Route exact path="/Estu/Inicio" component={Estu_Principal} />
                <Route exact path="/Estu/Perfil" component={Estu_Perfil} />
                <Route exact path="/Estu/Ver_Noticias" component={Estu_Comentario} />
                <Route exact path="/Estu/Ver_Cursos" component={Estu_Cursos} />
                <Route exact path="/Estu/Cursos_Asignados" component={Estu_Cursos_Propios} />
                <Route exact path="/Estu/Ver_Actividades" component={Estu_Actividades} />
                <Route exact path="/Estu/Actividades_Asignadas" component={Estu_Actividades_Propias} />
                <Route exact path="/Admin/Crear_Mensaje" component={Ad_Cre_Mensaje} />
                <Route exact path="/Admin/Ver_Mensaje" component={Ad_Mensajes} />
                <Route exact path="/Cola/Crear_Mensaje" component={Cola_Cre_Mensaje} />
                <Route exact path="/Cola/Ver_Mensaje" component={Cola_Mensajes} />
                <Route exact path="/Estu/Crear_Mensaje" component={Estu_Cre_Mensaje} />
                <Route exact path="/Estu/Ver_Mensaje" component={Estu_Mensajes} />
                <Route exact path="/Cate/Crear_Mensaje" component={Cate_Cre_Mensaje} />
                <Route exact path="/Cate/Ver_Mensaje" component={Cate_Mensajes} />
                <Route exact path="/Admin/Crear_Insumo" component={Ad_Cre_Insumo} />
                <Route exact path="/Admin/Reporte/Ingreso_Entrada" component={Ad_Re_InEn} />
                <Route exact path="/Admin/Reporte/Egresos" component={Ad_Re_Eg} />
                <Route exact path="/Admin/Reporte/Ingresos" component={Ad_Re_In} />
                <Route exact path="/Admin/Reporte/Asistentes_Nacionalidad" component={Ad_Re_AsNac} />
                <Route exact path="/Admin/Reporte/Asistentes_Universidad" component={Ad_Re_AsUn} />
                <Route exact path="/Admin/Reporte/Asistentes_X_Actividad" component={Ad_Re_AsXAc} />
                <Route exact path="/Admin/Reporte/Actividad_X_Estudiante" component={Ad_Re_AcXEs} />
                <Route exact path="/Admin/Reporte/Estudiantes_Curso" component={Ad_Re_EsCur} />
                <Route exact path="/Admin/Reporte/Estudiantes_vs_Asistentes" component={Ad_Re_EsVsAs} />
                <Route exact path="/Admin/Reporte/Conferencias_MejorPuntuadas" component={Ad_Re_ConMP} />
                <Route exact path="/Admin/Reporte/Talleres_MejorPuntuadas" component={Ad_Re_TalMP} />
                <Route exact path="/Admin/Reporte/Visitas_MejorPuntuadas" component={Ad_Re_ViMP} />
                <Route exact path="/Admin/Entrega_Coffe" component={Ad_De_Cof} />
                <Route exact path="/Admin/Entrega_Almuerzo" component={Ad_De_Al} />
                <Route exact path="/Admin/Entrega_Insumo" component={Ad_De_In} />
                <Route exact path="/Admin/Registro_Actividad" component={Ad_Asi_Ac} />
                <Route exact path="/Admin/Puntuar_Actividad" component={Ad_Pun_Ac} />
                <Route exact path="/Admin/Modificar_Insumo" component={Ad_Mod_In} />
                <Route exact path="/Cate/Reporte/Estudiantes_Curso" component={Cate_Re_EsCu} />
                <Route exact path="/Admin/Ver_Entregas" component={Ad_Entregas} />
                <Route exact path="/Admin/Ver_Asistencia" component={Ad_Asistencia} />
                <Route exact path="/Admin/Ver_Puntuacion" component={Ad_Puntuaciones} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}
export default Router;