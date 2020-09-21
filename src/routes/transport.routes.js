const express = require('express');
const router = express.Router();

const Transport = require('../models/transports')

router.get('/', async (req, res) => {
  const transports = await Transport.find();
  res.json(transports)
});

router.get('/:id', async (req, res) => {
  const currentTransport = await Transport.findById(req.params.id) ;
  res.json(currentTransport)
})

router.post('/', async (req, res) => {
  const { origen , capatazOrigen , transportista , destino , capatazDestino , fechaT , herramientaT } = req.body ;
  const transport = new Transport({ origen , capatazOrigen , transportista , destino , capatazDestino , fechaT , herramientaT })
  await transport.save();
  res.json({status: 'transporte guardado'})
})

router.put('/:id', async (req, res) => {
  const { origen , capatazOrigen , transportista , destino , capatazDestino , fechaT , herramientaT } = req.body ;
  const newTransport = { origen , capatazOrigen , transportista , destino , capatazDestino , fechaT , herramientaT } ;
  await Transport.findByIdAndUpdate(req.params.id, newTransport) ;
  res.json({status: 'transport updated'}) ;
})

router.delete('/:id', async (req, res) => {
  await Transport.findByIdAndRemove(req.params.id) ;
  res.json({status: 'transport deleted'}) ;
})

module.exports = router;