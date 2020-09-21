import React, {useState} from 'react';
/*import logo from '../img/boceto-06.jpg';
import screenshot from '../img/screenshot.jpg';
*/

const Homepage = ({importTools, importBuildingSites, importTransports, setScreen }) => {
  

  return (
    <div className="encabezado">
        <p onClick={(e) => {
          importTools(e) ;
          setScreen('tools')
          }}>Herramientas</p>
        <p onClick={(e) => {
          importBuildingSites(e) ;
          setScreen('building')
          console.log('click')
          }}>Obras</p>
        <p onClick={(e) => {
          importTransports(e) ;
          setScreen('transport')
          }}>Transportes</p>
        <p>Feed</p>
      </div>
  );
}
export default Homepage;
