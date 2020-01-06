import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Inicio from './componentes/Inicio'
import Admin from './componentes/Admin'

const Navegador = createStackNavigator({
  Inicio:{
    screen:Inicio,
    navigationOptions:{
      title:'Login'
    }
  },
  Admin:{
    screen:Admin,
    navigationOptions:{
      title:'Admin'
    }
  }
});

export default createAppContainer(Navegador)
