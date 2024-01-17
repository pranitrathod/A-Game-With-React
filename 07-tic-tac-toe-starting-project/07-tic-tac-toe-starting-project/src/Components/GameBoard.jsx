import { useState } from "react";
const initialGameSymbols = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare,activePlayer}) {
  const [gameBoard1, setGameBoard] = useState(initialGameSymbols);
  function symbol(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      // prevBoard[row][col]="X";
      //you dont have to do this,you have to create a deep copy and creat sameArray but update on that rather then orginal
      const updateBoard = [...prevBoard.map((index) => [...index])]; //created deep copy using spread operator
      updateBoard[rowIndex][colIndex] = activePlayer;
      return updateBoard;
    });
    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard1.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => symbol(rowIndex, colIndex)}>
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}