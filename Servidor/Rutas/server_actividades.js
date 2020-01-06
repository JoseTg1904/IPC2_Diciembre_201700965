const express = require('express');
const router = express.Router();
var actividades = require('../Archivos/actividades.json')
var fw = require('fs')
var nombre = "";
var identificador = require('../Archivos/identificador.json');

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(actividades)
    console.log(actividades)
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

//agregar nombre
router.post('/info', (req, res) => {
    nombre = req.body;
    console.log(nombre);
    res.send(req.body)
})

//añade al arreglo
router.post('/', (req, res) => {
    actividades.push(req.body)
    ordenarAsc(actividades,'horaIn') 
    var datos = JSON.stringify(actividades)
    fw.writeFileSync('Archivos/actividades.json', datos, 'utf-8')
    res.json('recibido');
});

function ordenarAsc(arreglo, parametro) {
    arreglo.sort(function (a, b) {
        var x = a[parametro], y= b[parametro]
        return ( (x<y) ? -1 : ((x>y)?1:0) )
    });
 }

//actualizar arreglo
router.post('/actualizar/:nombre', (req, res) => {
    cambiarValor(req.params.nombre, req.body)
    ordenarAsc(actividades,'horaIn')
    var datos = JSON.stringify(actividades)
    fw.writeFileSync('Archivos/actividades.json', datos, 'utf-8')
    res.send('actualizado')
});

//eliminar arreglo
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre)
    var datos = JSON.stringify(actividades)
    fw.writeFileSync('Archivos/actividades.json', datos, 'utf-8')
    res.send('eliminado')
});

//identificador de actividad
router.get('/identificador', (req, res) => {
    var id = "A-"+identificador 
    res.json(id)
    identificador++;
    fw.writeFileSync('Archivos/identificador.json', identificador, 'utf-8')
});

router.get('/csv', (req, res) => {
    crearCSV()
    res.json('ya')
})

function crearCSV() {
    var text = ""
    var admins = actividades;
    for (var i = 0; i < admins.length; i++) {
        text = text + admins[i]['codigo'] + "," + admins[i]['fecha'] + "," +
            admins[i]['horaIn'] + "," + admins[i]['horaFin'] + "," + admins[i]['lugar'] + "," +
            admins[i]['actividad'] + "," + admins[i]['participantes'] + "," +admins[i]['expositor'] +
            ","+ admins[i]['descripcion'] + "\n"
    }
    fw.exists("C:\\Users\\chepe\\Desktop\\actividades.csv", function (exists) {
        if (exists) {
            console.log(exists)
            fw.unlinkSync('C:\\Users\\chepe\\Desktop\\actividades.csv');
        } else {
            fw.appendFile("C:\\Users\\chepe\\Desktop\\actividades.csv", text, (err) => {
                if (err) {
                    throw err;
                }
                console.log('ya')
            })
        }
    });
    return (text)
}

function eliminarValor(valorABuscar) {
    for (var i = 0; i<actividades.length; i++) {
        if (actividades[i]['codigo'] === valorABuscar) {
            actividades.splice(i, 1)
        }
    }
}

function cambiarValor(valorABuscar, valorNuevo) {
    for (var i = 0; i < actividades.length; i++) {
        if (actividades[i]['codigo'] === valorABuscar) {
            actividades[i] = valorNuevo
        }
    }
}

function buscarUnico(valorABuscar) {
    for (var i = 0; i < actividades.length; i++) {
        if (actividades[i]['codigo'] === valorABuscar) {
            return actividades[i];
        }
    }
}

module.exports = router;