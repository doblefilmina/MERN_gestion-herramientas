import React, {useState, useEffect} from 'react';
import { render, ReactDOM } from 'react-dom';
import AddTool from './components/AddTool';
import Tools from './components/Tools';
import Homepage from './components/Homepage';
import BuildingSites from './components/buildingSites';
import Transports from './components/transports';


const initTools = () => {
   
  fetch('/api/tools', { method: 'GET' } )
    .then( res => res.json() )
    .then( tools => {
      console.log('casi casi casi casi')
      console.log(tools)
      return tools
    })
    const tools = tools => tools
    console.log(tools)
}


const App = () => {
  const[screen, setScreen]=useState('feed')


  const[tools, setTools] = useState([])
  const[currentTool, setCurrentTool] = useState({})

  const[buildingSites, setBuildingSites] = useState([])
  const[currentBuildingSite, setCurrentBuildingSite] = useState({})

  const[transports, setTransports] = useState([])
  const[currentTransport, setCurrentTransport] = useState({})


  const importTools = (e) => {
    e.preventDefault();
    fetch('/api/tools')
      .then( res => res.json() )
      .then ( tools => {
                setTools(tools)
                console.log(tools)
                setScreen('tools')
      })
  }  

  

  const deleteTool = (e) => {
    e.preventDefault();
    if (confirm(`Está seguro de que quiere eliminar ${currentTool.herramienta} - ${currentTool.marca} - ${currentTool.modelo}`)) {
      fetch(`/api/tools/${currentTool._id}` , {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }
  }

  const importBuildingSites = (e) => {
    e.preventDefault();
    fetch('/api/buildingsites')
      .then( res => res.json() )
      .then ( buildingSites => {
                setBuildingSites(buildingSites)
                console.log(buildingSites)
                setScreen('building')
              })
    }

  const deleteBuildingSite = (e) => {
    e.preventDefault()
    if (confirm(`Está seguro de que quiere eliminar ${currentBuildingSite.nombreFant}`)) { 
      fetch(`/api/buildingsites/${currentBuildingSite._id}` , {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  }

  const importTransports = (e) => {
    e.preventDefault();
    fetch('/api/transports')
      .then( res => res.json() )
      .then ( transports => {
                setTransports(transports)
                console.log(transports)
                setScreen('transport')
              })
    }


    const deleteTransport = (e) => {
      e.preventDefault();
      if (confirm(`Está seguro de que quiere eliminar el transporte ${currentTransport.herramientaT} de ${currentTransport.origen} a ${currentTransport.destino}`)) {
        fetch(`/api/transports/${currentTransport._id}` , {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
      }
    }

  return (
    <div className="Ap">
          <div className="homepage">
              <Homepage importTools={importTools} importBuildingSites={importBuildingSites} setScreen={setScreen} importTransports={importTransports} />
          </div>
          <div>
            {screen==='tools' && <Tools tools={tools} importTools={importTools} setCurrentTool={setCurrentTool} currentTool={currentTool} deleteTool={deleteTool} importTools={importTools} /> }
            {screen==='building' && <BuildingSites buildingSites={buildingSites} importBuildingSites={importBuildingSites} setCurrentBuildingSite={setCurrentBuildingSite} currentBuildingSite={currentBuildingSite} deleteBuildingSite={deleteBuildingSite} /> }
            {screen==='transport' && <Transports transports={transports} importTransports={importTransports} setCurrentTransport={setCurrentTransport} currentTransport={currentTransport} deleteTransport={deleteTransport} /> }
{/*            {screen==='buildingSites' && <Tools tools={tools} importTools={importTools} setCurrentTool={setCurrentTool} /> }
            {screen==='transports' && <Tools tools={tools} importTools={importTools} setCurrentTool={setCurrentTool}  /> }
            {screen==='feed' && <Tools tools={tools} importTools={importTools} setCurrentTool={setCurrentTool}  /> }
*/} 
            </div>
            
{/*
          <div className="tabla">
            
            <div className="columna-2">
              Acá van los detalles
              <Detail currentTool={currentTool} deleteTool={deleteTool}/>
            </div>
            <div className="columna-3">
              Aca van los formularios
              <AddTool saveTool={saveTool}/>
            </div>
          </div>
          )
   */}     
      
    </div>
  );
}

export default App;