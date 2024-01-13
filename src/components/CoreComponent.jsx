import Player from "./Player";


export default function CoreComp() {
  return (
    <section className="w-[32rem] h-[32rem] bg-yellow-200 rounded-md drop-shadow-lg p-4">
        <ol className="list-none flex justify-between font-roboto  text-slate-800">
            <Player initialName="player1" symbol="X" ></Player>
            <Player initialName="player2" symbol="O"></Player>
        </ol>
    </section>
  );
}
