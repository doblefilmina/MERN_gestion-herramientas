const mongoose = require('mongoose');
const { Schema } = mongoose ;

const ToolSchema = new Schema({
  herramienta: {type: String, required: true},
  marca: {type: String, required: true},
  modelo: {type: String, required: true},
  proveedor: {type: String, required: true},
  fecha: {type: String, required: true},
  precio: {type: String, required: true},
  capatazO: {type: String, required: true},
  obra: {type: String, required: true},
  comentarios: {type: String, required: true}
});

module.exports = mongoose.model('Tool', ToolSchema) ;
