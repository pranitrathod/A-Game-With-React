import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";

function App() {
  const [active,setActive]=useState("X");
  
  function whoIsActive()
  {
    setActive((player)=>player==="X" ? "O" :"X");
  }
  return (
    <main id="game-container">
      <ol className="highlight-player" id="players">
      <Player  isActive={active==="X"} name="Player 1" symbol="X"/>
      <Player  isActive={active==="O"} name="Player 2" symbol="O"/>
      </ol>
      <GameBoard onSelectSquare={whoIsActive} activePlayer={active}/>
    </main>
  );
}
export default App;
