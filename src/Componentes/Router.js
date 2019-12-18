import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Principal from '../Paginas/Principal'
import Re_Es from '../Paginas/Re_Es'
import Re_Ca from '../Paginas/Re_Ca'
import Ingreso from '../Paginas/In'
import NotFound from '../Paginas/NotFound'

function Router(){
    return(
        <BrowserRouter>
            <Switch> 
            <Route exact path="/Principal" component={Principal} />
            <Route exact path="/Registro_Estudiante" component={Re_Es} />
            <Route exact path="/Registro_Catedratico" component={Re_Ca} />
            <Route exact path="/Ingreso" component={Ingreso} />
            <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
        );
}
export default Router;