//import
import { useState } from "react";

export default function GameBoard({onSelectSquare, board}) {

  return (
    <ol className="m-0 p-0 flex gap-3 justify-between flex-col">

      {board.map((row,rowIndex) => (

          //tre quadrati
          <li key={rowIndex} className="flex gap-3 justify-between m-0">

            {row.map((playerSymbol, colIndex) => (

              //singolo quadrato
              <li key={colIndex} className="bg-slate-200 m-0 border-gray-950 border w-28 h-28 rounded">

                <button 
                  onClick={() => onSelectSquare(rowIndex, colIndex)} 
                  className="w-full h-full font-serif text-6xl font-black text-gray-900" 
                  disabled={ playerSymbol !== null }
                >
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
