const express = require('express');
const router = express.Router();
var admins = [];
var nombre = "";

//agregar curso 
router.post('/',(req,res)=>{
    admins.push(req.body)
})

//retorna el arreglo
router.get('/', (req, res) => {
    res.json(admins)
});

//eliminar asignacion
router.delete('/:nombre', (req, res) => {
    eliminarValor(req.params.nombre,req.body)
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