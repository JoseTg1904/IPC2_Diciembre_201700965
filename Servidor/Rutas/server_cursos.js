const express = require('express');
const router = express.Router();
var admins = require('../Archivos/cursos.json')
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
    res.send(nombre['codigo'])
});

//agregar nombre
router.post('/info', (req, res) => {
    nombre = req.body;
    console.log(nombre);
    res.send(req.body)
})

//agregar catedratico
router.get('/agregar/:curso/:cate',(req,res)=>{
    agregarCate(req.params.curso,req.params.cate)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/cursos.json', datos, 'utf-8')
    res.send('asignado')
})

//añade al arreglo
router.post('/', (req, res) => {
    admins.push(req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/cursos.json', datos, 'utf-8')
    res.json('recibido');
});

//actualizar arreglo
router.post('/actualizar/:nombre', (req, res) => {
    cambiarValor(req.params.nombre, req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/cursos.json', datos, 'utf-8')
    res.send('actualizado')
});

//eliminar arreglo
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/cursos.json', datos, 'utf-8')
    res.send('eliminado')

});

router.get('/csv', (req, res) => {
    crearCSV()
    res.json('ya')
})


function crearCSV() {
    var text = ""
    for (var i = 0; i < admins.length; i++) {
        text = text + admins[i]['codigo'] + "," + admins[i]['nombre'] + "," +
            admins[i]['seccion'] + "," + admins[i]['universidad'] + "," + admins[i]['titular'] + "\n"
    }
    fw.exists("C:\\Users\\chepe\\Desktop\\cursos.csv", function (exists) {
        if (exists) {
            console.log(exists)
            fw.unlinkSync('C:\\Users\\chepe\\Desktop\\cursos.csv');
        } else {
            fw.appendFile("C:\\Users\\chepe\\Desktop\\cursos.csv", text, (err) => {
                if (err) {
                    throw err;
                }
                console.log('ya')
            })
        }
    });
    return (text)
}

function agregarCate(curso,cate){
    for(var i=0;i<admins.length;i++){
        if(admins[i]['codigo']===curso){
            admins[i]['titular'] = cate
        }
    }
}

function eliminarValor(valorABuscar) {
    for (var i = 0; i < admins.length; i++) {
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