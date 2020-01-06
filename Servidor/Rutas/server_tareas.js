const express = require('express');
const router = express.Router();
var tareas = require('../Archivos/tareas.json')
var fw = require('fs')

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(tareas)
});

//retornar un valor del arreglo
router.get('/bus/:nick', (req, res) => {
    var respuesta = buscarUnico(req.params.nick)
    res.json(respuesta)
})

//añade al arreglo
router.post('/', (req, res) => {
    tareas.push(req.body)
    var datos = JSON.stringify(tareas)
    fw.writeFileSync('Archivos/tareas.json', datos, 'utf-8')
    console.log(tareas)
    res.json('recibido');
});


//actualizar arreglo
router.post('/actualizar/:nombre', (req, res) => {
    cambiarValor(req.params.nombre, req.body)
    var datos = JSON.stringify(tareas)
    fw.writeFileSync('Archivos/tareas.json', datos, 'utf-8')
    res.send('actualizado')
});


//eliminar arreglo
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre)
    var datos = JSON.stringify(tareas)
    fw.writeFileSync('Archivos/tareas.json', datos, 'utf-8')
    res.send('eliminado')
});

function eliminarValor(valorABuscar) {
    for (var i = 0; i<tareas.length; i++) {
        if (tareas[i]['nick'] === valorABuscar) {
            tareas.splice(i, 1)
        }
    }
} 

function cambiarValor(valorABuscar, valorNuevo) {
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i]['nick'] === valorABuscar) {
            tareas[i] = valorNuevo
        }
    }
}

function buscarUnico(valorABuscar) {
    for (var i = 0; i < tareas.length; i++) {
        if (tareas[i]['nick'] === valorABuscar) {
            return tareas[i];
        }
    }
}


module.exports = router;