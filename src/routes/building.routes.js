const express = require('express');
const router = express.Router();

const Building = require('../models/buildingSites')

router.get('/', async (req, res) => {
  const buildings = await Building.find();
  res.json(buildings)
});

router.get('/:id', async (req, res) => {
  const currentBuilding = await Building.findById(req.params.id) ;
  res.json(currentBuilding)
})

router.post('/', async (req, res) => {
  const {num, nombreFant, nombreCont, comitente, direccion, capataz, profesional} = req.body ;
  const building = new Building({num, nombreFant, nombreCont, comitente, direccion, capataz, profesional})
  await building.save();
  res.json({status: 'obra guardada'})
})

router.put('/:id', async (req, res) => {
  const {num, nombreFant, nombreCont, comitente, direccion, capataz, profesional} = req.body ;
  const newBuilding = {num, nombreFant, nombreCont, comitente, direccion, capataz, profesional} ;
  await Building.findByIdAndUpdate(req.params.id, newBuilding) ;
  res.json({status: 'building updated'}) ;
})

router.delete('/:id', async (req, res) => {
  await Building.findByIdAndRemove(req.params.id) ;
  res.json({status: 'building deleted'}) ;
})

module.exports = router;