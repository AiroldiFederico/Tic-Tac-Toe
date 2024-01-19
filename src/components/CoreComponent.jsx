//import
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
import { WINNING_COMBINATIONS } from "../winning-combinations";

// Hooks
import { useState } from "react";

//function
function deriveActivePlayer(gameTurns) {

  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  };

  return currentPlayer;
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


export default function CoreComp() {

  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {

    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for ( const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  };

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
    <>
      <section className="w-[26rem] h-[30rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">

        <ol className="list-none flex justify-between font-roboto  text-slate-800">
            <Player initialName="player1" symbol="X" isActive={activePlayer === "X"}></Player>
            <Player initialName="player2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>

        <div className="h-full m-0 p-0 flex items-center justify-center ">
          <GameBoard 
            onSelectSquare={handleSelectSquare}
            board={gameBoard}
          />
        </div>

        {winner && <p>YOU WON, {winner}!</p>}

      </section>

      <Log turns={gameTurns}/>
    </>

  );
}
