

export default function GameOver({ winner, onRestart }) {
    return <div className="flex flex-col w-[26rem] h-[30rem] justify-evenly text-center absolute top-[26.8%] bg-slate-900/75 rounded-md drop-shadow-lg p-4">
        <h2 className="text-4xl font-sans text-yellow-200 font-black">Game Over</h2>
        
        {winner && <p className="text-3xl font-sans text-yellow-200 font-black">{winner} WON!</p>}
        {!winner && <p className="text-3xl font-sans text-yellow-200 font-black">It's a draw</p>}

        <p>
            <button onClick={onRestart} className="font-sans text-slate-800 bg-yellow-200/75 rounded-lg p-2 shadow text-lg font-black">Rematch</button>
        </p>

    </div>
}