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
router.get('/ingresos', (req, res) => {
    res.json(admins)
});

//retorna los egresos
router.get('/egresos', (req, res) => {
    res.json(egresos)
});

//retorna la cantidad de boletos
router.get('/boletos', (req, res) => {
    res.json(boletos.length)
});

//retorna los egresos
router.get('/cant_egresos', (req, res) => {
    res.json(egreso)
});

//retorna los egresos
router.get('/cant_ingresos', (req, res) => {
    res.json(ingreso)
});

//retorna el estimado
router.get('/estimado', (req, res) => {
    res.json(meta)
});

//retorna un identificador
router.get('/identificador', (req, res) => {
    var id = "I-"+identificador 
    res.json(id)
    identificador = identificador+1;
});

//añade a los ingresos
router.post('/', (req, res) => {
    admins.push(req.body)
   // actualizarIngreso();
    console.log(ingreso)
    res.json('recibido');
});


//añade a los egresos
router.post('/egresos', (req, res) => {
    egresos.push(req.body)
    //actualizarEgreso();
    console.log(egresos)
    res.json('recibido');
});

function actualizarIngreso(){
    var dato = 0;
    for(var i=0;i<admins.length;i++){
        dato = dato + admins[i]['total']
    }
    ingreso = dato;
}

function actualizarEgreso(){
    var dato = 0;
    for(var i=0;i<egresos.length;i++){
        dato = dato + egresos[i]['total']
    }
    egresos = dato;
}

module.exports = router;