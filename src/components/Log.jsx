


export default function Log({ turns }) {
    return (
        <ol className=" h-[28rem] w-[26rem] absolute right-20 overflow-hidden">
            <h3 className="text-xl font-sans text-yellow-200 font-black">Log History</h3>
            {turns.map( turn => <li key={`${turn.square.row}${turn.square.col}`}> {turn.player} selected {turn.square.row},{turn.square.col}</li>)}
        </ol>
    );
};