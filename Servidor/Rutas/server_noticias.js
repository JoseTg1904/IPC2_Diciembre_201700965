const express = require('express');
const router = express.Router();
var noticias = require('../Archivos/noticias.json')
var nombre = "";
var ident = require('../Archivos/identificador.json')
var ide = require('../Archivos/identificador.json')
var fw = require('fs')

//agregar noticia
router.post('/',(req,res)=>{
    noticias.push(req.body)
    var datos = JSON.stringify(noticias)
    fw.writeFileSync('Archivos/noticias.json', datos, 'utf-8')
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
    fw.writeFileSync('Archivos/identificador.json',ident, 'utf-8')
});

//agregar comentario
router.post('/:codigo', (req,res) =>{
    buscarNoticia(req.params.codigo,req.body)
    var datos = JSON.stringify(noticias)
    fw.writeFileSync('Archivos/noticias.json', datos, 'utf-8')
})

//identificador-comentario
router.get('/id_Com', (req, res) => {
    var id = "C-"+ide 
    res.json(id)
    ide++;
    fw.writeFileSync('Archivos/identificador.json',ide, 'utf-8')
});

//eliminar comentario
router.delete('/elComen/:idNot/:idComen',(req,res) =>{
    console.log(req.params.idNot)
    console.log(req.params.idComen)
    res.send( eliminarComentario(req.params.idNot,req.params.idComen) )
    var datos = JSON.stringify(noticias)
    fw.writeFileSync('Archivos/noticias.json', datos, 'utf-8')
})
    
router.delete('/elNot/:idNot',(req,res) =>{
    res.send( eliminarNoticia(req.params.idNot) )
    var datos = JSON.stringify(noticias)
    fw.writeFileSync('Archivos/noticias.json', datos, 'utf-8')
})

 
function buscarNoticia(id,comen){
    for(let i=0;i<noticias.length;i++){
        if(noticias[i]['codigo'] === id){
            noticias[i]['comentarios'].push(comen)
        }
    }
}

function eliminarNoticia(id,comen){
    for(let i=0;i<noticias.length;i++){
        if(noticias[i]['codigo'] === id){
            noticias.splice(i,1)
        }
    }
}

function eliminarComentario(idNot,idComen){
    for(let i=0;i<noticias.length;i++){
        if(noticias[i]['codigo'] === idNot){
            console.log("entro al primer if " + noticias[i]['codigo'])
            for(let j=0;j<noticias[i]['comentarios'].length;j++){
                console.log(j)
                if(noticias[i]['comentarios'][j]['codigo'] === idComen){
                    noticias[i]['comentarios'].splice(j,1)
                    return ('eliminado')
                }
            }
        }
    }
}

module.exports = router;