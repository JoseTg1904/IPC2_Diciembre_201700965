import React from 'react'
import {
  View, Text,
  StyleSheet, TextInput, TouchableHighlight, Alert
} from 'react-native'

class Inicio extends React.Component {

  constructor() {
    super()
    this.state = {
      usu: '',
      contra: ''
    }
    this.cambiarUsuario = this.cambiarUsuario.bind(this)
  }

  cambiarContra(contra) {
    this.setState({ contra })
  }

  cambiarUsuario(usu) {
    this.setState({ usu })
  }

  obtenerDatos() {

    if (this.state.usu === "admin" && this.state.contra === "admin") {
      Alert.alert('soy el admin')
      this.props.navigation.navigate('Admin')
    } else {

      fetch("http://192.168.0.16:4000/Crear_Admin/validar", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nick: this.state.usu,
          contra: this.state.contra,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (JSON.stringify(data) === "1000") {
            Alert.alert('soy un administrador')
            this.props.navigation.navigate('Admin')
          } else {
            fetch("http://192.168.0.16:4000/Crear_Cola/validar", {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                nick: this.state.usu,
                contra: this.state.contra,
              }),
            })
              .then(res1 => res1.json())
              .then(data1 => {
                if (JSON.stringify(data1) === "1000") {
                  Alert.alert('soy un colaborador')
                } else {
                  fetch("http://192.168.0.16:4000/Crear_Estu/validar", {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      nick: this.state.usu,
                      contra: this.state.contra,
                    }),
                  })
                    .then(res2 => res2.json())
                    .then(data2 => {
                      if (JSON.stringify(data2) === "1000") {
                        Alert.alert('soy un estudiante')
                      } else {
                      }
                    })
                }
              })
          }
        })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(usu) => this.cambiarUsuario(usu)} value={this.state.usu} style={styles.input}
          placeholder="Usuario"
          id="usuario" />
        <TextInput secureTextEntry={true} onChangeText={(contra) => this.cambiarContra(contra)} value={this.state.contra} style={styles.input}
          placeholder="Contraseña"
          id="contra" />
        <TouchableHighlight onPress={() => this.obtenerDatos()} style={styles.boton}>
          <Text style={styles.text} >Ingresar</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    marginBottom: 20,
  },
  boton: {
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 2,
    height: 50,
    width: 300,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default Inicio