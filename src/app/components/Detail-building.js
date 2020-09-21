import React, {useState, useEffect} from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core' ;



const Detail = ({currentBuildingSite, deleteBuildingSite}) => {

  return ( 
        <div>
          <div className="Detail">
            <ul className="Detail-list">
              <li>Numero de contrato: {currentBuildingSite.num}</li>
              <li>Nombre de fantasia obra: {currentBuildingSite.nombreFant}</li>
              <li>Nombre contrato: {currentBuildingSite.nombreCont}</li>
              <li>Comitente: {currentBuildingSite.comitente}</li>
              <li>Direccion: {currentBuildingSite.direccion}</li>
              <li>Capataz: {currentBuildingSite.capataz}</li>
              <li>Profesional a cargo: {currentBuildingSite.profesional}</li>                
            </ul>
            <button>Editar</button>
            <button onClick={deleteBuildingSite} >Eliminar</button>
            <button>Transporte</button>
          </div>

        </div>
  );
}
export default Detail;
