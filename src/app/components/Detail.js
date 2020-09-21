import React, {useState, useEffect} from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core' ;



const Detail = ({currentTool, deleteTool, editTool}) => {

  return ( 
        <div>
          <div className="Detail">
             <ul className="Detail-list">
                <li>Herramienta: {currentTool.herramienta}</li>
                <li>Marca: {currentTool.marca}</li>
                <li>Modelo: {currentTool.modelo}</li>
                <li>Proveedor: {currentTool.proveedor}</li>
                <li>Fecha de compra: {currentTool.fecha}</li>
                <li>Precio de compra: {currentTool.precio}</li>
                <li>Capataz a cargo: {currentTool.capatazO}</li>
                <li>Obra: {currentTool.obra}</li>
                <li>Comentarios: {currentTool.comentarios}</li>
             </ul>
             <button onClick={editTool} >Editar</button>
             <button onClick={deleteTool} >Eliminar</button>
             <button>Transporte</button>
          </div>

        </div>
  );
}
export default Detail;
