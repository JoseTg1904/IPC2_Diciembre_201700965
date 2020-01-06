const express = require('express');
const router = express.Router();
var admins = require('../Archivos/asignacion_cursos.json')
var nombre = "";
var fw = require('fs')



//agregar curso 
router.post('/',(req,res)=>{
    admins.push(req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/asignacion_cursos.json', datos, 'utf-8')
})
 
//retorna el arreglo
router.get('/', (req, res) => {
    res.json(admins)
});

//eliminar asignacion
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre,req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/asignacion_cursos.json', datos, 'utf-8')
    res.send('eliminado')

});

function eliminarValor(carne,curso) {
    for (var i = 0; i< admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            admins.splice(i, 1)
        }
    }
}

module.exports = router;