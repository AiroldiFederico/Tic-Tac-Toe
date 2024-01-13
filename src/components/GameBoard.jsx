//import

export default function GameBoard() {
  const tabs = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <ol className="m-0 p-0 flex gap-4 justify-between flex-col">

      {tabs.map((row, rowIndex) => (
        <li key={rowIndex} className="flex gap-4 justify-between m-0">
          {row.map((col, colIndex) => (
            <li key={colIndex} className="bg-slate-400 m-0 border-gray-950 border w-28 h-28 rounded shadow-inner">
              <button>{col}</button>
            </li>
          ))}
        </li>
      ))}

    </ol>
  );
}
