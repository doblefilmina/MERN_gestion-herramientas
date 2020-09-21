import React, {useState} from 'react';


const AddTransport = () => {

  const[origen, setOrigen] = useState('')
  const[capatazOrigen, setCapatazOrigen] = useState('')
  const[transportista, setTransportista] = useState('')
  const[destino, setDestino] = useState('')
  const[capatazDestino, setCapatazDestino] = useState('')
  const[fechaT, setFechaT] = useState('')
  const[herramientaT, setHerramientaT] = useState('')

  const saveTransport = (e) => {
    e.preventDefault();
    const newTransport = { origen , capatazOrigen , transportista , destino , capatazDestino , fechaT , herramientaT }
    fetch('/api/transports', {
      method: 'POST',
      body: JSON.stringify(newTransport),
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
      <form onSubmit={saveTransport}>
        <h2>Obra origen</h2>
        <input onChange={event => setOrigen(event.target.value)}/>
        <h2>Capataz obra origen</h2>
        <input onChange={event => setCapatazOrigen(event.target.value)}/>
        <h2>Transportista</h2>
        <input onChange={event => setTransportista(event.target.value)}/>
        <h2>Obra de destino</h2>
        <input onChange={event => setDestino(event.target.value)}/>
        <h2>Capataz obra destino</h2>
        <input onChange={event => setCapatazDestino(event.target.value)}/>
        <h2>Fecha de transporte</h2>
        <input onChange={event => setFechaT(event.target.value)}/>
        <h2>Herramienta</h2>
        <input onChange={event => setHerramientaT(event.target.value)}/>

        <button type="submit" >Guardar Transporte</button>
      </form>
      </div>
  </div>
  )
 }

 export default AddTransport;