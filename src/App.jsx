import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { useState } from "react";

function App() {
  const [active,setActive]=useState("X");
  
  function handlePlayer()
  {
    setActive((player)=>player==="X" ? "O" :"X");
  }
  return (
    <>
    <main id="game-container">
      <ol className="highlight-player" id="players">
      <Player  isActive={active==="X"} name="Player 1" symbol="X"/>
      <Player  isActive={active==="O"} name="Player 2" symbol="O"/>
      </ol>
      <GameBoard onSelectSquare={handlePlayer} activePlayer={active}/>
    </main>
    <Log/>
    </>
  );
}
export default App;
