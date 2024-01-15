import { useState } from "react";

export default function Player({ name = "Computer", symbol }) {
    const [isEditing,setEdit]=useState(false);
    const [Edit,save]=useState(false);
    const [playerName,setPlayerName]=useState(name);
    function edit()
    {   console.log("inside!");
        if(!isEditing){
            setEdit(true); 
        }else{
            setEdit(false);
        }
        save((editIt)=>!editIt);
        //here dont get confused why the variable name is different,
        //whenever anything changes it will change to Edit!    
    } 
    function handleChange(eventKey)
    {
    if(Edit)
    {
      setPlayerName(eventKey.target.value);
    } 
    }
  return (
    <li>
      <span className="player">
      {isEditing?<input type="text" required defaultValue={playerName} onChange={handleChange}/>:<span className="player-name">
          {playerName}
        </span>//Above change is also called as two-way binding when onchange triggers useState changes 
      }
      <span className="player-symbol">{symbol}</span>
      <button onClick={edit}>{Edit?"Save":"Edit"}</button>
      </span>
    </li>
  );
}
