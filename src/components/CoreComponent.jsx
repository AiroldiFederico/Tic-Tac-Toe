import Player from "./Player";


export default function CoreComp() {
  return (
    <section className="w-[26rem] h-[22rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">
        <ol className="list-none flex justify-between font-sans text-slate-800 font-bold">
            <Player name="player1" symbol="X" ></Player>
            <Player name="player2" symbol="O"></Player>
        </ol>
    </section>
  );
}
