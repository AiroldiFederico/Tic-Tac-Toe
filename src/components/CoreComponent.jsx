//import
import GameBoard from "./GameBoard";
import Player from "./Player";
import Log from "./Log";
import GameOver from "./GameOver";
import { WINNING_COMBINATIONS } from "../winning-combinations";

// Hooks
import { useState } from "react";

//variables
const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//function
function deriveActivePlayer(gameTurns) {

  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  };

  return currentPlayer;
};

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

  for (const turn of gameTurns) {

    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {

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
      winner = players[firstSquareSymbol];
    }
  };

  return winner;

};


export default function CoreComp() {

  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  };

  return (
    <>
      <section className="w-[26rem] h-[30rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">

        <ol className="list-none flex justify-between font-roboto  text-slate-800">
            <Player 
              initialName={PLAYERS.X} 
              symbol="X"
              onChangeName={handlePlayerNameChange} 
              isActive={activePlayer === "X"}>
            </Player>

            <Player 
              initialName={PLAYERS.O}  
              symbol="O"
              onChangeName={handlePlayerNameChange} 
              isActive={activePlayer === "O"}>
            </Player>
        </ol>

        <div className="h-full m-0 p-0 flex items-center justify-center ">
          <GameBoard 
            onSelectSquare={handleSelectSquare}
            board={gameBoard}
          />
        </div>

      </section>

      { (winner || hasDraw) && (
        <GameOver winner={winner} onRestart={handleRestart}/>
      )}

      <Log turns={gameTurns}/>
    </>

  );
}
