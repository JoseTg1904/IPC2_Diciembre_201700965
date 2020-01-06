const express = require('express');
const router = express.Router();
var admins = require('../Archivos/estudiantes.json')
var nombre = "";
var fw = require('fs')

//retorna el arreglo
router.get('/', (req, res) => {
    res.send(admins)
});

//
router.post('/csv', (req, res) => {
    //console.log(req.body)
    leerCSV(req.body)
    res.send('a ver')
})

router.get('/csv', (req, res) => {
    crearCSV()
    res.json('ya')
})

//retornar un valor del arreglo
router.get('/bus/:nick', (req, res) => {
    var respuesta = buscarUnico(req.params.nick)
    res.json(respuesta)
})

router.get('/busCarne/:carne',(req,res)=>{
    var respuesta = buscarCarne(req.params.carne)
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
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/estudiantes.json', datos, 'utf-8')
    res.json('recibido');
});

//validar carne
router.post('/validar/:carne', (req, res) => {
    res.send(validar(req.params.carne))
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

function validar(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['carne'] === valorABuscar) {
            admins[i]['pago'] = true
            return "1000";
        }
    }
}

function validarSesion(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar['nick'] &&
            admins[i]['contra'] === valorABuscar['contra']) {
            return "1000";
        }
    }
    return "2000"
}

function leerCSV(data) {
    console.log(data)
    var dataArray = data.split(/\r?\n/);
    for (var i = 0; i < dataArray.length; i++) {
        var arreglo = dataArray[i].split(",");
        var carne = arreglo[0]
        console.log("es el carne " + carne)
        var json = {
            carne: carne,
            nombre: arreglo[1],
            fecha: arreglo[2],
            telefono: arreglo[3],
            correo: arreglo[4],
            universidad: arreglo[5],
            nacionalidad: arreglo[6],
            nick: arreglo[7],
            contra: arreglo[8],
            pago: arreglo[9]
        }
    }
    var tran = JSON.stringify(json)
    console.log(tran)
    admins.push(json)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/estudiantes.json', datos, 'utf-8')
    console.log(admins)
}


function crearCSV() {
    var text = ""
    for (var i = 0; i < admins.length; i++) {
        text = text + admins[i]['carne'] + "," + admins[i]['nombre'] + "," +
            admins[i]['fecha'] + "," + admins[i]['telefono'] + "," + admins[i]['correo'] + "," +
            admins[i]['universidad'] + "," + admins[i]['nacionalidad'] + "," +
            admins[i]['nick'] + "," + admins[i]['contra'] + "," +
            admins[i]['pago'] + "\n"
    }
    fw.exists("C:\\Users\\chepe\\Desktop\\estudiantes.csv", function (exists) {
        if (exists) {
            console.log(exists)
            fw.unlinkSync('C:\\Users\\chepe\\Desktop\\estudiantes.csv');
        } else {
            fw.appendFile("C:\\Users\\chepe\\Desktop\\estudiantes.csv", text, (err) => {
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
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            admins.splice(i, 1)
            var datos = JSON.stringify(admins)
            fw.writeFileSync('Archivos/estudiantes.json', datos, 'utf-8')
        }
    }
}

function cambiarValor(valorABuscar, valorNuevo) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            admins[i] = valorNuevo
            var datos = JSON.stringify(admins)
            fw.writeFileSync('Archivos/estudiantes.json', datos, 'utf-8')
        }
    }
}

function buscarCarne(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i]['carne'] === valorABuscar) {
            return admins[i];
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