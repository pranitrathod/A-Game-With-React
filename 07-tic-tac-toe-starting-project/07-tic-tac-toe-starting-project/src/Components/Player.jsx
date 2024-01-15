import { useState } from "react";

export default function Player({ name = "Computer", symbol }) {
    const [isEditing,setEdit]=useState(false);
    function edit()
    {console.log("inside!");
        if(!isEditing){
            setEdit(true);
        }else{
            setEdit(false);
        }
    }
    const [name,changedName]=useState({name});
    
    function change()
    {
        if(setEdit){
            changedName()
        }
    }


  return (
    <li>
      <span className="player">
      {isEditing?<input type="text" onChange={change}/>:<span className="player-name">
          {name}
        </span>}
        
        <span className="player-symbol">{symbol}</span>
        <button onClick={edit}>Edit</button>
      </span>
    </li>
  );
}
