import React, {useState, useEffect} from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core' ;



const Detail = ({currentTransport, deleteTransport}) => {

  return ( 
        <div>
          <div className="Detail">
            <ul className="Detail-list">
              <li>Obra de origen: {currentTransport.origen}</li>
              <li>Capataz de origen: {currentTransport.capatazOrigen}</li>
              <li>Transportista: {currentTransport.transportista}</li>
              <li>Obra de destino: {currentTransport.destino}</li>
              <li>Capataz destino: {currentTransport.capatazDestino}</li>
              <li>Fecha de traslado: {currentTransport.fechaT}</li>
              <li>Herramientas transportadas: {currentTransport.herramientaT}</li>                
            </ul>
            <button>Editar</button>
            <button onClick={deleteTransport} >Eliminar</button>
            <button>Transporte</button>
          </div>
        </div>
  );
}
export default Detail;
