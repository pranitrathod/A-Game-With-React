import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
// import Log from "./Components/Log";
import { useState } from "react";

function App() {
  const [active,setActive]=useState("X");
  const [gameTurns,setGameTurns]=useState([]);
  
  function handlePlayer(rowIndex,colIndex)
  {
    setActive((currPlayer)=>currPlayer==="X" ? "O" :"X");
    setGameTurns((playerTurns)=>{
      let currentPlayer='X';
      if(playerTurns.length>0 && playerTurns[0].player==="X"){
        currentPlayer="O";
      }
      const updatePlayer=[{sqaure:{row:rowIndex,col:colIndex},player:currentPlayer},...playerTurns];
      return updatePlayer;  
    });
  }
  return (
    <>
    <main id="game-container">
      <ol className="highlight-player" id="players">
      <Player  isActive={active==="X"} name="Player 1" symbol="X"/>
      <Player  isActive={active==="O"} name="Player 2" symbol="O"/>
      </ol>
      <GameBoard onSelectSquare={handlePlayer} turns={gameTurns}/>
    </main>
    {/* <Log /> */}
    </>
  );
}
export default App;
