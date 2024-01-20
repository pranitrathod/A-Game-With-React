import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/winning-combinations";
import { useState } from "react";
const initialGameSymbols = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function derivedStatePlayerUpdate(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  // console.log(gameTurns.length);
  return currentPlayer;
}
function App() {
  // const [active,setActive]=useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedStatePlayerUpdate(gameTurns);

  const gameBoard = initialGameSymbols;
  for (const turn of gameTurns) {
    const { sqaure, player } = turn;
    console.log(turn);
    const { row, col } = sqaure;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      console.log(firstSymbol);
      winner = firstSymbol;
    }
  }

  function handlePlayer(rowIndex, colIndex) {
    // setActive((currPlayer)=>currPlayer==="X" ? "O" :"X");
    setGameTurns((prevTurns) => {
      // let currentPlayer='X';
      // if(playerTurns.length>0 && playerTurns[0].player==="X"){
      //   currentPlayer="O";
      // }

      const currentPlayer = derivedStatePlayerUpdate(prevTurns);
      const updatePlayer = [
        { sqaure: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      // console.log("playerTurns[0] after update:", updatePlayer[0].player);
      return updatePlayer;
    });
  }
  return (
    <>
      <main id="game-container">
        <ol className="highlight-player" id="players">
          <Player isActive={activePlayer === "X"} name="Player 1" symbol="X" />
          <Player isActive={activePlayer === "O"} name="Player 2" symbol="O" />
        </ol>
        {winner && <p>YOU WON {newNam}!</p>}
        <GameBoard onSelectSquare={handlePlayer} board={gameBoard} />
        
      </main>
      <Log turns={gameTurns} />
    </>
  );
}
export default App;
