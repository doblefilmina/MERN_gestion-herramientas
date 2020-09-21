const mongoose = require('mongoose');
const { Schema } = mongoose ;

const BuildingSiteSchema = new Schema({
  num: {type: String, required: true},
  nombreFant: {type: String, required: true},
  nombreCont: {type: String, required: true},
  comitente: {type: String, required: true},
  direccion: {type: String, required: true},
  capataz: {type: String, required: true},
  profesional: {type: String, required: true}
});

module.exports = mongoose.model('building', BuildingSiteSchema) ;
