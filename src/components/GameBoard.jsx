//import
import { useState } from "react";

const oldGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
  const [GameBoard, setGameBoard] = useState(oldGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ]; //per best practices duplichiamo l'array e manipoliamo la copia
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });

    onSelectSquare();
  }

  return (
    <ol className="m-0 p-0 flex gap-3 justify-between flex-col">

      {GameBoard.map((row,rowIndex) => (

          //tre quadrati
          <li key={rowIndex} className="flex gap-3 justify-between m-0">

            {row.map((playerSymbol, colIndex) => (

              //singolo quadrato
              <li key={colIndex} className="bg-slate-200 m-0 border-gray-950 border w-28 h-28 rounded">
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)} className="w-full h-full font-serif text-6xl font-black text-gray-900">
                  {playerSymbol}
                </button>
              </li>
              
            ))}

          </li>

        )
      )}

    </ol>
  );
}
