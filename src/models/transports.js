const mongoose = require('mongoose');
const { Schema } = mongoose ;

const TransportSchema = new Schema({
  origen: {type: String, required: true},
  capatazOrigen: {type: String, required: true},
  transportista: {type: String, required: true},
  destino: {type: String, required: true},
  capatazDestino: {type: String, required: true},
  fechaT: {type: String, required: true},
  herramientaT: {type: String, required: true}
});

module.exports = mongoose.model('transport', TransportSchema) ;