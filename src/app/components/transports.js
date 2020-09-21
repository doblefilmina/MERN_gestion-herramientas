import React, {useState, useEffect} from 'react';
import Detail from './Detail-transport';
import AddTransport from './AddTransport';



const Transports = ({transports, importTransports, setCurrentTransport, currentTransport, deleteTransport }) => {
  const [screenNewTransport, setScreenNewTransport] = useState(true) 
  const[screenDetailTransport, setScreenDetailTransport] = useState(false)
  

  return (
      <div>
        <div className="Table">
          <div className="column-1">

            <div className="button" onClick={() => {
              setScreenNewTransport(true)
              setScreenDetailTransport(false)
                }} >
                  Agregar transporte   
            </div>
            <ul className="List">
              {transports.map((transport, index) => {
                return <li className="list-item" key={index} onClick={ () => {
                  setCurrentTransport(transport)
                  setScreenDetailTransport(true)
                  setScreenNewTransport(false)
                  } }>
                    
                  {transport.herramientaT} - {transport.origen} - {transport.destino}
                  </li>
              })}
            </ul> 
          </div>
            
          <div className="column-2">
          {screenDetailTransport && <Detail currentTransport={currentTransport} deleteTransport={deleteTransport} /> }
          {screenNewTransport && <AddTransport importTransports={importTransports}  /> }

          </div>
        </div>
      </div>
  );
}
export default Transports;