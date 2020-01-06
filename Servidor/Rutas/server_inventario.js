const express = require('express');
const router = express.Router();
var admins = require('../Archivos/inventario_ingreso.json') //ingreso
var egresos = require('../Archivos/inventario_egreso.json'); //egresos
var boletos = require('../Archivos/inventario_boleto.json') //solo boletos
var ingreso = 0;
var egreso = 0;
var meta = 0;
var identificador = require('../Archivos/identificador.json')
var nombre = "";
var fw = require('fs')

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

//retorna un identificador
router.get('/identificador', (req, res) => {
    var id = "I-"+identificador 
    res.json(id)
    identificador++;
    fw.writeFileSync('Archivos/identificador.json',identificador, 'utf-8')
});

router.get('/descontar/:id',(req,res)=>{
    descontar(req.params.id)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/inventario_ingreso.json', datos, 'utf-8')
    res.send("todo bien todo correcto y yo que me alegro")
})

//añade a los ingresos
router.post('/', (req, res) => {
    admins.push(req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/inventario_ingreso.json', datos, 'utf-8')
    res.json('recibido');
});

//añade a los boletos
router.post('/boletos', (req, res) => {
    boletos.push(req.body)
    var datos = JSON.stringify(boletos)
    fw.writeFileSync('Archivos/inventario_boleto.json', datos, 'utf-8')
    res.json('recibido');
});

//añade a los egresos
router.post('/egresos', (req, res) => {
    egresos.push(req.body)
    var datos = JSON.stringify(egresos)
    fw.writeFileSync('Archivos/inventario_egreso.json', datos, 'utf-8')
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

function descontar(id){
    for(var i=0;i<admins.length;i++){
        if(admins[i]['codigo'] === id){
            var res = Number(admins[i]['restante'])
            console.log(res)
            res = res - 1
            console.log(res)
            admins[i]['restante'] = res 
        }
    }
}

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