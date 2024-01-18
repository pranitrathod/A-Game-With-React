import { useState } from "react";

export default function Player({ name = "Computer", symbol,isActive }) {
    const [isEditing,setEdit]=useState(false);
    const [Edit,save]=useState("Edit");
    function edit()
    {console.log("inside!");
        if(!isEditing){
            setEdit(true);
            save("Save");
        }else{
            setEdit(false);
            save("Edit");
        }
    }
    // const [name,changedName]=useState({name});
    // function change()
    // {
    //     if(setEdit){
    //         changedName()
    //     }
    // }
  return (
    <li className={isActive? 'active':undefined}>
      <span className="player">
      {isEditing?<input type="text"/>:<span className="player-name">
          {name}
        </span>
      }
        <span className="player-symbol">{symbol}</span>
        <button onClick={edit}>{Edit}</button>
      </span>
    </li>
  );
}
