const express = require('express');
const router = express.Router();
var mensajes = require('../Archivos/entregas.json')
var nombre = "";
var fw = require('fs')

//agregar curso 
router.post('/cafe',(req,res)=>{
    var aux = validar(req.body)
    if( aux === "1000"){
        mensajes.push(req.body)
        var datos = JSON.stringify(mensajes)
        fw.writeFileSync('Archivos/entregas.json', datos, 'utf-8')
        res.send("1000")
    }else{
        res.send("2000")
    }

})

router.post('/almuerzo',(req,res)=>{
    var aux = validarAl(req.body)
    console.log(aux)
    if( aux === "1000"){
        mensajes.push(req.body)
        var datos = JSON.stringify(mensajes)
        fw.writeFileSync('Archivos/entregas.json', datos, 'utf-8')
        res.send("1000")
    }else{
        res.send("2000")
    }

})

router.post('/insumo',(req,res)=>{
    var aux = validarIn(req.body)
    console.log(aux)
    if( aux === "1000"){
        mensajes.push(req.body)
        var datos = JSON.stringify(mensajes)
        fw.writeFileSync('Archivos/entregas.json', datos, 'utf-8')
        res.send("1000")
    }else{
        res.send("2000")
    }

})

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(mensajes)
});

//eliminar asignacion
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre)
    var datos = JSON.stringify(mensajes)
    fw.writeFileSync('Archivos/entregas.json', datos, 'utf-8')
    res.send('eliminado')
});

function validarIn(id){
    var veri = 0
     for(var i=0;i<mensajes.length;i++){
        if(mensajes[i]['carne'] === id.carne && mensajes[i]['entrega']['tipo']===id.entrega.tipo){
            veri++;
        } 
     }

     if(veri === 1){
         return "2000"
     }else{
         return "1000"
     }
 }

function validarAl(id){
    var veri = 0
     for(var i=0;i<mensajes.length;i++){
        if(mensajes[i]['carne'] === id.carne && mensajes[i]['fecha'] === id.fecha && mensajes[i]['entrega']['tipo']===id.entrega.tipo){
            veri++;
        } 
     }

     if(veri === 1){
         return "2000"
     }else{
         return "1000"
     }
 }

function validar(id){
   var cont = 0
    for(var i=0;i<mensajes.length;i++){
       if(mensajes[i]['carne'] === id.carne && mensajes[i]['fecha'] === id.fecha && mensajes[i]['entrega']['tipo']===id.entrega.tipo){
            cont++;
       } 
    }
    if(cont === 2){
        return "2000"
    }else if(cont === 0 || cont === 1){
        return "1000"
    }
}

function eliminarValor(valorABuscar) {
    for (var i = 0; i< mensajes.length; i++) {
        if (mensajes[i]['entrega']['codigo'] === valorABuscar) {
            mensajes.splice(i, 1)
        }
    }
}

module.exports = router;