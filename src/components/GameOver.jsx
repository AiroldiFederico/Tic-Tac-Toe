

export default function GameOver({ winner, onRestart }) {
    return <div>
        <h2>Game Over!</h2>
        
        {winner && <p>{winner} WON!</p>}
        {!winner && <p>It's a draw!</p>}

        <p>
            <button onClick={onRestart}>Rematch!</button>
        </p>

    </div>
}