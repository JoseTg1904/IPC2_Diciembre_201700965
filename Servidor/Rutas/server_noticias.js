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

//agregar comentario
router.post('/:codigo', (req,res) =>{
    buscarNoticia(req.params.codigo,req.body)
})

//identificador-comentario
router.get('/id_Com', (req, res) => {
    var id = "N-"+ide 
    res.json(id)
    ide++;
});

function buscarNoticia(id,comen){
    for(let i=0;i<noticias.length;i++){
        if(noticias[i]['codigo'] === id){
            noticias[i]['comentarios'].push(comen)
        }
    }
}

module.exports = router;