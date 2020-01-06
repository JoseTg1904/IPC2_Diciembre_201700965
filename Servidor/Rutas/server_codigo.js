const express = require('express');
const router = express.Router();
var mensajes = require('../Archivos/codigos.json')
var identificador = require('../Archivos/identificador.json')
var fw = require('fs')

//agregar curso 
router.get('/carga/:carne', (req, res) => {
    var codigo = "P-"+identificador
    var json = {
        carne:req.params.carne,
        codigo:codigo
    }
    mensajes.push(json)
    var datos = JSON.stringify(mensajes)
    fw.writeFileSync('Archivos/codigos.json', datos, 'utf-8')
    identificador++;
    fw.writeFileSync('Archivos/identificador.json',identificador, 'utf-8')
    res.send('ya')
})

router.get('/validar/:carne/:codigo', (req, res) => {
    var aux = validar(req.params.carne,req.params.codigo)
    if(aux ==="1000"){
        res.send("1000")
    }else{
        res.send("2000")
    }
})

router.get('/bus/:carne', (req, res) => {
    var aux = retornar(req.params.carne)
    res.json(aux)
})

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(mensajes)
});

function retornar(carne){
    for(var i=0;i<mensajes.length;i++){
        if(mensajes[i]['carne']===carne){
            return mensajes[i]['codigo']
        }
    }    
}

function validar(carne,codigo){
    for(var i=0;i<mensajes.length;i++){
        if(mensajes[i]['carne']===carne && mensajes[i]['codigo']){
            return "1000"
        }
    }
    return "2000"
}

module.exports = router;