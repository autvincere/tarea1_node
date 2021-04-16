const mongoose = require("mongoose");

const modelCategoria = mongoose.Schema(
  {
    categoria_nombre: {
      type: String,
      required: true,
      unique: true,
    }
  }
//   {
//     timestamps: true,
//   }
);

const model = mongoose.model('ModelCategoria', modelCategoria)

module.exports = model;

