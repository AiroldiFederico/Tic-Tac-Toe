import Player from "./Player";


export default function CoreComp() {
  return (
    <section className="w-[36rem] h-[32rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">
        <ol className="list-none flex justify-between font-sans text-slate-800 font-bold">
            <Player initialName="player1" symbol="❌" ></Player>
            <Player initialName="player2" symbol="⭕"></Player>
        </ol>
    </section>
  );
}
