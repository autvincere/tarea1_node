

const data = [
     {
          id: 123,
          categoria:'Polos',
          producto:'Polo Rambo'
     },
     {
          id: 124,
          categoria:'Polos',
          producto:'Polo Levy'
     }
]

// Listar productos
const listar = (req, res) => {
     res.json({
         data  
     })
}

// Guardar productos
const guardar = (req, res) => {  
     res.json({
          message: 'Guardado'
     })
}

//Borrar productos
const borrar = (req, res) => {
     res.json({
          message: 'borrado'
     })    
}


// Actualizar productos
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