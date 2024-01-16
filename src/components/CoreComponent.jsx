import GameBoard from "./GameBoard";
import Player from "./Player";

// Hooks
import { useState } from "react";


export default function CoreComp() {

  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");
  }

  return (
    <section className="w-[26rem] h-[30rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">
        <ol className="list-none flex justify-between font-roboto  text-slate-800">
            <Player initialName="player1" symbol="X" isActive={activePlayer === "X"}></Player>
            <Player initialName="player2" symbol="O" isActive={activePlayer === "O"}></Player>
        </ol>
        <div className="h-full m-0 p-0 flex items-center justify-center ">
         <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
        </div>
    </section>
  );
}
