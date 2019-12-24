const express = require('express');
const router = express.Router();
var noticias = [];
var nombre = "";
var ident = 0;
var ide = 0;

//agregar noticia
router.post('/',(req,res)=>{
    noticias.push(req.body)
    console.log(req.body)
})

//retorna el arreglo
router.get('/not', (req, res) => {
    res.json(noticias)
});

//identificador-noticia
router.get('/id_Not', (req, res) => {
    var id = "N-"+ident 
    res.json(id)
    ident++;
});

//identificador-comentario
router.get('/id_Com', (req, res) => {
    var id = "N-"+ide 
    res.json(id)
    ide++;
});

module.exports = router;