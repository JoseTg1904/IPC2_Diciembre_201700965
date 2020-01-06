const express = require('express');
const router = express.Router();
var admins = require('../Archivos/contactos.json')
var nombre = "";
var fw = require('fs')

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
    res.send(nombre['nombre'])
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
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/contactos.json', datos, 'utf-8')
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

router.get('/csv', (req, res) => {
    crearCSV()
    res.json('ya')
})


function crearCSV() {
    var text = ""
    for (var i = 0; i < admins.length; i++) {
        text = text + admins[i]['nombre'] + "," + admins[i]['telefono'] + "," +
            admins[i]['correo'] + "," + admins[i]['direccion'] + "," + admins[i]['rol'] + "," +
            admins[i]['oportunidades'] + "," + admins[i]['encargado'] + "\n"
    }
    fw.exists("C:\\Users\\chepe\\Desktop\\contactos.csv", function (exists) {
        if (exists) {
            console.log(exists)
            fw.unlinkSync('C:\\Users\\chepe\\Desktop\\contactos.csv');
        } else {
            fw.appendFile("C:\\Users\\chepe\\Desktop\\contactos.csv", text, (err) => {
                if (err) {
                    throw err;
                }
                console.log('ya')
            })
        }
    });
    return (text)
}

function validarSesion(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar['nick'] &&
            admins[i]['contra'] === valorABuscar['contra']) {
            return "1000";
        }
    }
}

function eliminarValor(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nombre'] === valorABuscar) {
            admins.splice(i, 1)
            var datos = JSON.stringify(admins)
            fw.writeFileSync('Archivos/contactos.json', datos, 'utf-8')
        }
    }
}

function cambiarValor(valorABuscar, valorNuevo) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nombre'] === valorABuscar) {
            admins[i] = valorNuevo
            var datos = JSON.stringify(admins)
            fw.writeFileSync('Archivos/contactos.json', datos, 'utf-8')
        }
    }
}

function buscarUnico(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nombre'] === valorABuscar) {
            return admins[i];
        }
    }
}

module.exports = router;