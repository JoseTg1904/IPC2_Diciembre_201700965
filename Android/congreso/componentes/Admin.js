import React, { Component } from 'react';
import { Content, Input, Tab, Tabs, TabHeading, Item, Container, Header, Button, Card, CardItem, Text, Body } from 'native-base';
import { Alert, StyleSheet, TouchableHighlight } from 'react-native';

class Admin extends React.Component {

    constructor() {
        super()
        this.state = {
            carne: '',
        }
    }

    cambiarCarne(carne) {
        this.setState({ carne })
    }

    buscarCodigo() {
        var path = "http://192.168.0.16:4000/Codigos/bus/" + this.state.carne
        fetch(path)
        .then(res => res.json())
        .then(data =>{
            Alert.alert('El codigo es: ' + data)
        })
    }

    render() {
        return (
            <Container>
                <Header hasTabs />
                <Tabs>
                    <Tab heading={<TabHeading><Text>Registro actividad</Text></TabHeading>}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Item>
                                        <Input onChangeText={(carne) => this.cambiarCarne(carne)} value={this.state.carne} placeholder="Ingrese el carne a buscar" />
                                    </Item>
                                    <TouchableHighlight style={styles.boton} onPress={() => this.buscarCodigo()}>
                                        <Text>Buscar</Text>
                                    </TouchableHighlight>
                                </Body>
                            </CardItem>
                            <CardItem footer>
                                <Text>GeekyAnts</Text>
                            </CardItem>
                        </Card>
                    </Tab>
                    <Tab heading={<TabHeading><Text>Registro Insumo</Text></TabHeading>}>
                    </Tab>
                </Tabs>
            </Container>
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
        backgroundColor: 'skyblue',
        height: 30,
        width: 60,
        alignContent: 'flex-end'
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default Admin