import React, {useState} from 'react';


const AddTool = ({currentTool, screenEdit}) => {

  const[herramienta, setHerramienta] = useState('')
  const[marca, setMarca] = useState('')
  const[modelo, setModelo] = useState('')
  const[proveedor, setProveedor] = useState('')
  const[fecha, setFecha] = useState('')
  const[precio, setPrecio] = useState('')
  const[capatazO, setCapatazO] = useState('')
  const[obra, setObra] = useState('')
  const[comentarios, setComentarios] = useState('')

  const saveTool = (e) => {
    e.preventDefault();
    const newTool = { herramienta , marca , modelo , proveedor , fecha , precio , capatazO , obra , comentarios }
    fetch('/api/tools', {
      method: 'POST',
      body: JSON.stringify(newTool),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then( res => res.json() )
      .then(data => console.log(data))
      .catch(err => console.error(err)) 
  }

  

  return (
  <div>
    <div className="AddSomething">
      <form onSubmit={saveTool}>
        <h2>Herramienta</h2>
        <input value={screenEdit ? currentTool.herramienta : ''} onChange={event => setHerramienta(event.target.value)}/>
        <h2>Marca</h2>
        <input value={screenEdit ? currentTool.marca : ''} onChange={event => setMarca(event.target.value)}/>
        <h2>Modelo</h2>
        <input value={screenEdit ? currentTool.modelo : ''} onChange={event => setModelo(event.target.value)}/>
        <h2>Proveedor</h2>
        <input value={screenEdit ? currentTool.proveedor : ''} onChange={event => setProveedor(event.target.value)}/>
        <h2>Fecha de compra</h2>
        <input value={screenEdit ? currentTool.fecha : ''} onChange={event => setFecha(event.target.value)}/>
        <h2>Precio compra</h2>
        <input value={screenEdit ? currentTool.precio : ''} onChange={event => setPrecio(event.target.value)}/>
        <h2>Capataz</h2>
        <input value={screenEdit ? currentTool.CapatazO : ''} onChange={event => setCapatazO(event.target.value)}/>
        <h2>Obra</h2>
        <input value={screenEdit ? currentTool.obra : ''} onChange={event => setObra(event.target.value)}/>
        <h2>Comentarios</h2>
        <textarea value={screenEdit ? currentTool.comentarios : ''} onChange={event => setComentarios(event.target.value)}></textarea>
        <button type="submit" >Guardar Herramienta</button>
      </form>
      </div>
  </div>
  )
 }

 export default AddTool;