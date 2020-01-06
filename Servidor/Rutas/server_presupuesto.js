const express = require('express');
const router = express.Router();
var admins = require('../Archivos/presupuesto_ingreso.json') //ingreso
var egresos = require('../Archivos/presupuesto_egreso.json')//egresos
var boletos = require('../Archivos/presupuesto_boleto.json')//solo boletos
var ingreso = 0;
var egreso = 0;
var meta = 0;
var identificador = require('../Archivos/identificador.json')//
var nombre = "";
var fw = require('fs')

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
    res.json(actualizarEgreso())
});

//retorna los egresos
router.get('/cant_ingresos', (req, res) => {
    res.json(actualizarIngreso())
});

//retorna el estimado
router.get('/estimado', (req, res) => {
    res.json(meta)
});

//retornar restante
router.get('/restante', (req,res) =>{
    res.json( retornarSobrante(actualizarIngreso(),actualizarEgreso(),meta) )
})

//retorna un identificador
router.get('/identificador', (req, res) => {
    var id = "I-"+identificador 
    res.json(id)
    identificador = identificador+1;
    fw.writeFileSync('Archivos/identificador.json',identificador, 'utf-8')
});

//añade a los ingresos
router.post('/', (req, res) => {
    admins.push(req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/presupuesto_ingreso.json', datos, 'utf-8')
    res.json('recibido');
});


//añade a los egresos
router.post('/egresos', (req, res) => {
    egresos.push(req.body)
    var datos = JSON.stringify(egresos)
    fw.writeFileSync('Archivos/presupuesto_egreso.json', datos, 'utf-8')
    //actualizarEgreso();
    console.log(egresos)
    res.json('recibido');
});

router.post('/:meta', (req,res) =>{
    meta = req.params.meta
})

//eliminar ingreso
router.delete('/ingreso/:codigo',(req,res)=>{
    eliminarIngreso(req.params.codigo)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/presupuesto_ingreso.json', datos, 'utf-8')
    res.send('eliminado')
})

router.delete('/egreso/:codigo',(req,res)=>{
    eliminarEgreso(req.params.codigo)
    var datos = JSON.stringify(egresos)
    fw.writeFileSync('Archivos/presupuesto_egreso.json', datos, 'utf-8')
    res.send('eliminado')
})

function eliminarIngreso(valorABuscar){
    for(let i=0;i<admins.length;i++){
        if(admins[i]['codigo'] === valorABuscar){
            admins.splice(i,1);
        }
    }
}

function eliminarEgreso(valorABuscar){
    for(let i=0;i<egresos.length;i++){
        if(egresos[i]['codigo'] === valorABuscar){
            egresos.splice(i,1);
        }
    }
}

function retornarSobrante(ing,egr,met){
    console.log("valor ingreso " + ing)
    console.log("valord egreso"+ egr)
    console.log("valor meta "+ met)
    return (met-(ing-egr))
}

function actualizarIngreso(){
    var dato = 0;
    for(var i=0;i<admins.length;i++){
        dato = dato + Number(admins[i]['total'])
    }
    return dato;
}

function actualizarEgreso(){
    var dato = 0;
    for(var i=0;i<egresos.length;i++){
        dato = dato + Number(egresos[i]['total'])
    }
    return dato;
}

module.exports = router;