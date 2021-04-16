let modelCategoria = require('../models/categoria_model')

const data = [
     {
          id: 123,
          nombre:'Polos'
     },
     {
          id: 124,
          nombre:'Pantalones'
     }
]

// Listar Categorias
const listar = (req, res) => {
     res.json({
         data  
     })
}

// Get Categoria
const getCategoria = (req, res) => {
     res.json({
          id: 124,
          nombre:'Pantalones'
     })
}

// Guardar Categoria
let guardar = (req, res) => {
     const data = {
          categoria_nombre: "Polos"
     }
    modelCategoria = new modelCategoria(data)
     modelCategoria.save( (err, docCategoria) => {
          console.log(err)
          console.log(docCategoria)

     })

     res.json({
          message: 'Guardado'
     })
}

//Borrar Categoría
const borrar = (req, res) => {
     res.json({
          message: 'borrado'
     })    
}


// Actualizar
const update = (req,res) => {
     res.json({
          message: 'Actualizado'
     })     
}

module.exports = {
     listar,
     guardar,
     borrar, 
     update,
     getCategoria
}