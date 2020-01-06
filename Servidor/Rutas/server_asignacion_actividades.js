const express = require('express');
const router = express.Router();
var admins = require('../Archivos/asignacion_actividades.json')
var nombre = "";
var fw = require('fs')


//agregar curso 
router.post('/',(req,res)=>{
    admins.push(req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/asignacion_actividades.json', datos, 'utf-8')
})

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(admins)
});

router.get('/as/:carne/:codigo',(req,res)=>{
    asistencia(req.params.carne,req.params.codigo)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/asignacion_actividades.json', datos, 'utf-8')
    res.send('ya')
})

router.get('/des/:carne/:codigo',(req,res)=>{
    desasitir(req.params.carne,req.params.codigo)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/asignacion_actividades.json', datos, 'utf-8')
    res.send('ya')
})

//eliminar asignacion
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre,req.body)
    var datos = JSON.stringify(admins)
    fw.writeFileSync('Archivos/asignacion_actividades.json', datos, 'utf-8')
    res.send('eliminado')

});

function asistencia(carne,codigo){
    for(var i=0;i<admins.length;i++){
        if(admins[i]['carne']===carne&&admins[i]['curso']['codigo']===codigo){
            admins[i]['asistencia'] = true
        }
    }
    console.log(admins)
}

function desasitir(carne,codigo){
    for(var i=0;i<admins.length;i++){
        if(admins[i]['carne']===carne&&admins[i]['curso']['codigo']===codigo){
            admins[i]['asistencia'] = false
        }
    }
    console.log(admins)
}



function eliminarValor(carne,curso) {
    for (var i = 0; i< admins.length; i++) {
        if (admins[i]['nick'] === valorABuscar) {
            admins.splice(i, 1)
        }
    }
}

module.exports = router;