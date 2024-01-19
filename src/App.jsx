import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";

function derivedStatePlayerUpdate(gameTurns)
  { 
    let currentPlayer='X';
    if(gameTurns.length>0 && gameTurns[0].player==="X")
    {currentPlayer="O";}
    return currentPlayer;
    
  }
function App() {
  const [active,setActive]=useState("X");
  const [gameTurns,setGameTurns]=useState([]);
  
const activePlayer=derivedStatePlayerUpdate(gameTurns);
  
  function handlePlayer(rowIndex,colIndex)
  {
    setActive((currPlayer)=>currPlayer==="X" ? "O" :"X");
    setGameTurns((prevTurns)=>{
      // let currentPlayer='X';
      // if(playerTurns.length>0 && playerTurns[0].player==="X"){
      //   currentPlayer="O";
      // }
       const currentPlayer=derivedStatePlayerUpdate(prevTurns);
      const updatePlayer=[{sqaure:{row:rowIndex,col:colIndex},player:currentPlayer},...prevTurns];
      // console.log("playerTurns[0] after update:", updatePlayer[0].player);
      return updatePlayer;  
    });
  }
  return (
    <>
    <main id="game-container">
      <ol className="highlight-player" id="players">
      <Player  isActive={activePlayer==="X"} name="Player 1" symbol="X"/>
      <Player  isActive={activePlayer==="O"} name="Player 2" symbol="O"/>
      </ol>
      <GameBoard onSelectSquare={handlePlayer} turns={gameTurns}/>
    </main>
    <Log turns={gameTurns}/>
    </>
  );
}
export default App;
