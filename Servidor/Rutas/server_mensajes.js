const express = require('express');
const router = express.Router();
var mensajes = require('../Archivos/mensajes.json')
var nombre = "";
var identificador = require('../Archivos/identificador.json')
var fw = require('fs')

//identificador de actividad
router.get('/identificador', (req, res) => {
    var id = "M-"+identificador 
    res.json(id)
    identificador++;
    fw.writeFileSync('Archivos/identificador.json',identificador, 'utf-8')
});

//agregar curso 
router.post('/',(req,res)=>{
    mensajes.push(req.body)
    var datos = JSON.stringify(mensajes)
    fw.writeFileSync('Archivos/mensajes.json', datos, 'utf-8')
})

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(mensajes)
});

//eliminar asignacion
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre,req.body)
    var datos = JSON.stringify(mensajes)
    fw.writeFileSync('Archivos/mensajes.json', datos, 'utf-8')
    res.send('eliminado')

});

function eliminarValor(carne,curso) {
    for (var i = 0; i< mensajes.length; i++) {
        if (mensajes[i]['nick'] === valorABuscar) {
            mensajes.splice(i, 1)
        }
    }
}

module.exports = router;