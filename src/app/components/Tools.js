import React, {useState, useEffect} from 'react';
import Detail from './Detail';
import AddTool from './AddTool';



const Tools = ({tools, setCurrentTool, currentTool, deleteTool, importTools }) => {
  const [screenNewTool, setScreenNewTool] = useState(true) 
  const[screenDetail, setScreenDetail] = useState(false)
  const[screenEdit, setScreenEdit] = useState(false)
  
  const editTool = (e) => {
    setScreenNewTool(true)
    setScreenDetail(false)
    setScreenEdit(true)
    
  }

  return (
      <div>
        <div className="Table">
          <div className="column-1">

            <div className="button" onClick={() => {
              setScreenEdit(false)
              setScreenNewTool(true)
              setScreenDetail(false)
              console.log(currentTool)
                }} >
                  Agregar herramienta      
            </div>
            <ul className="List">
              {tools.map((tool, index) => {
                return <li className="list-item" key={index} onClick={ () => {
                  setCurrentTool(tool)
                  setScreenDetail(true)
                  setScreenNewTool(false)
                  } }>
                  {tool.herramienta}
                  </li>
              })}
            </ul> 
          </div>
            
          <div className="column-2">
          {screenDetail && <Detail currentTool={currentTool} deleteTool={deleteTool} editTool={editTool}  /> }
          {screenNewTool && <AddTool importTools={importTools} currentTool={currentTool} screenEdit={screenEdit}  /> }

          </div>
        </div>
      </div>
  );
}
export default Tools;