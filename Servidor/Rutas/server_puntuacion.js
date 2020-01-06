const express = require('express');
const router = express.Router();
var mensajes = require('../Archivos/puntuacion.json')
var identificador = require('../Archivos/identificador.json')
var fw = require('fs')

//retornar puntuaciones 
router.get('/', (req, res) => {
    res.send(mensajes)
})

router.post('/:codigo/:tipo/:descripcion',(req,res)=>{
    buscar(req.params.codigo,req.params.tipo,req.params.descripcion,req.body)
    var datos = JSON.stringify(mensajes)
    fw.writeFileSync('Archivos/puntuacion.json', datos, 'utf-8')
    res.send('ya')
})

function buscar(codigo,tipo,descripcion,puntuacion){
    var ver = false
    for(var i=0;i<mensajes.length;i++){
        if(mensajes[i]['codigo']===codigo){
            ver = true            
        }
    }

    if(ver===true){
        for(var i=0;i<mensajes.length;i++){
            if(mensajes[i]['codigo']===codigo){
                mensajes[i]['puntuaciones'].push(puntuacion)
            }
        }
    }else{
        var json = {
            codigo:codigo,
            tipo:tipo,
            descripcion:descripcion,
            puntuaciones:[
                puntuacion
            ]
        }
        mensajes.push(json)
    }


}

module.exports = router;