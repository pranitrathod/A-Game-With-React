import { useState } from "react";
export default function Player({ name = "Computer", symbol, isActive,whoWon}) {
  const [isEditing, setEdit] = useState(false);
  const [Edit, save] = useState("Edit");
  const [newName, setName] = useState(name);
  function edit() {
    if (!isEditing) {
      setEdit(true);
      
    }else {
      setEdit(false);
      save("Edit");
    }if(isEditing){ 
      whoWon(symbol,newName);}
  }function change(e) {
    if (setEdit) {
      setName(e.target.value); 
    }
  }
  // console.log(newName);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={newName} onChange={change} />
        ) : (
          <span className="player-name">{newName}</span>
            )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={edit}>{Edit}</button>
      </span>
    </li>
  );
}