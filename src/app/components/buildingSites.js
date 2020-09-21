import React, {useState, useEffect} from 'react';
import Detail from './Detail-building';
import AddBuilding from './AddBuilding';



const BuildingSites = ({buildingSites, setCurrentBuildingSite, currentBuildingSite, deleteBuildingSite, importBuildingSites }) => {
  const [screenNewBuilding, setScreenNewBuilding] = useState(true) 
  const[screenDetailBuilding, setScreenDetailBuilding] = useState(false)
  

  return (
      <div>
        <div className="Table">
          <div className="column-1">

            <div className="button" onClick={() => {
              setScreenNewBuilding(true)
              setScreenDetailBuilding(false)
                }} >
                  Agregar obra      
            </div>
            <ul className="List">
              {buildingSites.map((building, index) => {
                return <li className="list-item" key={index} onClick={ () => {
                  setCurrentBuildingSite(building)
                  setScreenDetailBuilding(true)
                  setScreenNewBuilding(false)
                  } }>
                  {building.nombreFant}
                  </li>
              })}
            </ul> 
          </div>
            
          <div className="column-2">
          {screenDetailBuilding && <Detail currentBuildingSite={currentBuildingSite} deleteBuildingSite={deleteBuildingSite} /> }
          {screenNewBuilding && <AddBuilding importBuildingSites={importBuildingSites}  /> }

          </div>
        </div>
      </div>
  );
}
export default BuildingSites;