const express = require('express');
const router = express.Router();
var admins = [];
var nombre = "";

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(admins)
});

//retornar un valor del arreglo
router.get('/bus/:nick', (req, res) => {
    var respuesta = buscarUnico(req.params.nick)
    res.json(respuesta)
})

//devolver nombre
router.get('/a/nick', (req, res) => {
    res.send(nombre['nick'])
});

//validar sesion
router.post('/validar', (req, res) => {
    res.send(validarSesion(req.body))
})

//agregar nombre
router.post('/info', (req, res) => {
    nombre = req.body;
    console.log(nombre);
    res.send(req.body)
})

//añade al arreglo
router.post('/', (req, res) => {
    admins.push(req.body)
    res.json('recibido');
});

//actualizar arreglo
router.post('/actualizar/:nombre', (req, res) => {
    cambiarValor(req.params.nombre, req.body)
    res.send('actualizado')
});

//eliminar arreglo
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre)
    res.send('eliminado')
});

function validarSesion(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar['nick'] &&
            admins[i]['contra'] === valorABuscar['contra']) {
            return "1000";
        }
    }
}

function eliminarValor(valorABuscar) {
    for (var i = 0; i<admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            admins.splice(i, 1)
        }
    }
}

function cambiarValor(valorABuscar, valorNuevo) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            admins[i] = valorNuevo
        }
    }
}

function buscarUnico(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            return admins[i];
        }
    }
}


module.exports = router;