const express = require('express');
const router = express.Router();

const Tool = require('../models/tool')

router.get('/', async (req, res) => {
  const tools = await Tool.find();
  res.json(tools)
});

router.get('/:id', async (req, res) => {
  const currentTool = await Tool.findById(req.params.id) ;
  res.json(currentTool)
})

router.post('/', async (req, res) => {
  const { herramienta , marca , modelo , proveedor , fecha , precio , capatazO , obra , comentarios } = req.body ;
  const tool = new Tool({ herramienta , marca , modelo , proveedor , fecha , precio , capatazO , obra , comentarios })
  await tool.save();
  res.json({status: 'tarea guardada'})
})

router.put('/:id', async (req, res) => {
  const { herramienta , marca , modelo , proveedor , fecha , precio , capataz , obra  } = req.body ;
  const newTool = { herramienta , marca , modelo , proveedor , fecha , precio , capataz , obra  } ;
  await Tool.findByIdAndUpdate(req.params.id, newTool) ;
  res.json({status: 'tool updated'}) ;
})

router.delete('/:id', async (req, res) => {
  await Tool.findByIdAndRemove(req.params.id) ;
  res.json({status: 'tool deleted'}) ;
})

module.exports = router;