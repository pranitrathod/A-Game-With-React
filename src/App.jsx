import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/winning-combinations";
import { useState } from "react";
import GameOver from "./Components/GameOver";

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
function App(name) {
  // const [active,setActive]=useState("X");

  const [players,updatePlayers]=useState({
    X:'Player 1',
    O:'Player 2'
  })
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivedStatePlayerUpdate(gameTurns);

  const gameBoard = [...initialGameSymbols].map(innerArray=>[...innerArray]);
  for (const turn of gameTurns) {
    const { sqaure, player } = turn;
    console.log(turn);
    const { row, col } = sqaure;
    gameBoard[row][col] = player;
  }
  let winner;
  let isDraw;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      // if(firstSymbol==="X"){
      //   winner=player1;
      // }else{
      //   winner=player2;
      // }
      console.log(players[firstSymbol]);
      winner = players[firstSymbol];
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
  function reStart()
  {
    setGameTurns([]);
  }

//Lifting the states from Player to App is called lifting up!
function handleWhoWon(symbol,newName)
{ console.log("INSIDE handle who won!");
  updatePlayers((prevPlayer)=>{
    return {
      ...prevPlayer,
      [symbol]:newName
    }
  })
}

  return (
    <>
      <main id="game-container">
        <ol className="highlight-player" id="players">
          <Player isActive={activePlayer === "X"} name={"Player 1"} symbol="X" whoWon={handleWhoWon}/>
          <Player isActive={activePlayer === "O"} name={"Player 2"} symbol="O" whoWon={handleWhoWon}/>
        </ol>
        {winner && <GameOver winner={winner} reStart={reStart}/>}
        {gameTurns.length===9 &&  <GameOver winner={winner} reStart={reStart}/>}
        <GameBoard onSelectSquare={handlePlayer} board={gameBoard} />
      </main>
      <Log turns={gameTurns} />
    </>
  );
  }
export default App;
