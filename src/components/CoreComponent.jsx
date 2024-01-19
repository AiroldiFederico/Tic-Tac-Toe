import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";

// Hooks
import { useState } from "react";

function deriveActivePlayer(gameTurns) {

  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  };

  return currentPlayer;
};


export default function CoreComp() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) {

    setGameTurns(prevTurns => {

      const currentPlayer = deriveActivePlayer(prevTurns)

      const updateTurns = [
          { square: { row: rowIndex, col: colIndex}, player: currentPlayer},
          ...prevTurns
      ];

      return updateTurns;
    });
  }

  return (
    <section className="w-[26rem] h-[30rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">

      <ol className="list-none flex justify-between font-roboto  text-slate-800">
          <Player initialName="player1" symbol="X" isActive={activePlayer === "X"}></Player>
          <Player initialName="player2" symbol="O" isActive={activePlayer === "O"}></Player>
      </ol>

      <div className="h-full m-0 p-0 flex items-center justify-center ">
        <GameBoard 
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>

      <Log turns={gameTurns}/>

    </section>
  );
}
