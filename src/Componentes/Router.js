import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Principal from '../Paginas/Principal'
import Re_Es from '../Paginas/Re_Es'
import Re_Ca from '../Paginas/Re_Ca'
import Ingreso from '../Paginas/In'
import NotFound from '../Paginas/NotFound'
import Ad_Prin from '../Paginas/Admin_Principal'
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

function Router(){
    return(
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
            <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
        );
}
export default Router;