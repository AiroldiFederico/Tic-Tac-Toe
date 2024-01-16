import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editPlayerName = <span className="pl-1">{playerName}</span>;
  let btnCaption = "EDIT";

  function handleEditClick() {
    setIsEditing((editing) => !editing); // best practice
    // setIsEditing(!isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  if (isEditing) {
    editPlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handleChange}
        className="w-auto max-w-20 text-slate-800 rounded focus:outline-none bg-yellow-100 ring-1 ring-blue-300 ps-1"
      />
    );

    btnCaption = "SAVE";
  }

  return (
    <li className={`m-0 p-1 flex gap-4 justify-between ${isActive ? ' bg-yellow-100 shadow rounded-lg' : ''}`}>
      <span className="flex w-24 justify-between">
        {editPlayerName}
        <span>{symbol}</span>
      </span>
      <button
        onClick={handleEditClick}
        className="text-slate-400 bg-blue-100 shadow px-2 rounded-full text-xs"
      >
        {btnCaption}
      </button>
    </li>
  );
}
