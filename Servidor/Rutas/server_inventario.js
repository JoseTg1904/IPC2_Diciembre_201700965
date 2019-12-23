const express = require('express');
const router = express.Router();
var admins = []; //ingreso
var egresos = []; //egresos
var boletos = []; //solo boletos
var ingreso = 0;
var egreso = 0;
var meta = 0;
var identificador = 0;
var nombre = "";

//retorna los ingresos
router.get('/', (req, res) => {
    res.json(admins)
});

//retorna los egresos
router.get('/egresos', (req, res) => {
    res.json(admins)
});

//retorna la cantidad de boletos
router.get('/boletos', (req, res) => {
    res.json(boletos.length)
});

//retorna los egresos
router.get('/cant_egresos', (req, res) => {
    res.json(admins)
});

//retorna los egresos
router.get('/cant_ingresos', (req, res) => {
    res.json(admins)
});

//retorna el estimado
router.get('/estimado', (req, res) => {
    res.json(admins)
});

//retorna los egresos
router.get('/identificador', (req, res) => {
    var id = "I-"+identificador 
    res.json(id)
    identificador++;
});

//añade a los ingresos
router.post('/', (req, res) => {
    admins.push(req.body)
    res.json('recibido');
});

//añade a los boletos
router.post('/boletos', (req, res) => {
    boletos.push(req.body)
    res.json('recibido');
});

//añade a los egresos
router.post('/egresos', (req, res) => {
    egresos.push(req.body)
    res.json('recibido');
});

//retornar un valor del arreglo
router.get('/bus/:nick', (req, res) => {
    var respuesta = buscarUnico(req.params.nick)
    res.json(respuesta)
})

//devolver nombre
router.get('/a/nick', (req, res) => {
    res.send(nombre['codigo'])
});

//agregar nombre
router.post('/info', (req, res) => {
    nombre = req.body;
    console.log(nombre);
    res.send(req.body)
})


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

function eliminarValor(valorABuscar) {
    for (var i = 0; i< admins.length; i++) {
        if (admins[i]['codigo'] === valorABuscar) {
            admins.splice(i, 1)
        }
    }
}

function cambiarValor(valorABuscar, valorNuevo) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['codigo'] === valorABuscar) {
            admins[i] = valorNuevo
        }
    }
}

function buscarUnico(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['codigo'] === valorABuscar) {
            return admins[i];
        }
    }
}

module.exports = router;