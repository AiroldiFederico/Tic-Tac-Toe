//import
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, turns}) {

  // LIFT UP 
  // const [GameBoard, setGameBoard] = useState(oldGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updateBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ]; //per best practices duplichiamo l'array e manipoliamo la copia
  //     updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updateBoard;
  //   });

  //   onSelectSquare();
  // }

  let gameBoard = initialGameBoard;

  for (const turn of turns) {

    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return (
    <ol className="m-0 p-0 flex gap-3 justify-between flex-col">

      {gameBoard.map((row,rowIndex) => (

          //tre quadrati
          <li key={rowIndex} className="flex gap-3 justify-between m-0">

            {row.map((playerSymbol, colIndex) => (

              //singolo quadrato
              <li key={colIndex} className="bg-slate-200 m-0 border-gray-950 border w-28 h-28 rounded">

                <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                className="w-full h-full font-serif text-6xl font-black text-gray-900">
                  {playerSymbol}
                </button>

              </li>
              
            ))}

          </li>

        )
      )};

    </ol>
  );
}
