import React, {useState} from 'react';


const AddBuilding = () => {
  
  const[num, setNum] = useState('')
  const[nombreFant, setNombreFant] = useState('')
  const[nombreCont, setNombreCont] = useState('')
  const[comitente, setComitente] = useState('')
  const[direccion, setDireccion] = useState('')
  const[capataz, setCapataz] = useState('')
  const[profesional, setProfesional] = useState('')

  const saveBuilding = (e) => {
    e.preventDefault();
    const newBuilding = {num, nombreFant, nombreCont, comitente, direccion, capataz, profesional}
    fetch('/api/buildingsites', {
      method: 'POST',
      body: JSON.stringify(newBuilding),
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
      <form onSubmit={saveBuilding}>
        <h2>Numero de contrato</h2>
        <input onChange={event => setNum(event.target.value)}/>
        <h2>Nombre Fantasia obra</h2>           
        <input onChange={event => setNombreFant(event.target.value)}/>
        <h2>Nombre segun contrato</h2>
        <input onChange={event => setNombreCont(event.target.value)}/>
        <h2>Comitente</h2>
        <input onChange={event => setComitente(event.target.value)}/>
        <h2>Direccion</h2>
        <input onChange={event => setDireccion(event.target.value)}/>
        <h2>Capataz</h2>
        <input onChange={event => setCapataz(event.target.value)}/>
        <h2>Profesional a cargo</h2>
        <input onChange={event => setProfesional(event.target.value)}/>
        <button type="submit">Guardar Obra</button>
      </form>
    </div>
  </div> 
  )
 }

 export default AddBuilding;