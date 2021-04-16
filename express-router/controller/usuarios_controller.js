
const data = [
     {
          id: 123,
          usuario:'usuar1'
     },
     {
          id: 124,
          usuario:'usuar2'
     }
]

// Listar usuarios
const listar = (req, res) => {
     res.json({
         data  
     })
}

// Guardar usuarios
const guardar = (req, res) => {  
     res.json({
          message: 'Guardado'
     })
}

//Borrar usuarios
const borrar = (req, res) => {
     res.json({
          message: 'borrado'
     })    
}


// Actualizar usuarios
const update = (req,res) => {
     res.json({
          message: 'Actualizado'
     })     
}

module.exports = {
     listar,
     guardar,
     borrar,
     update 
}