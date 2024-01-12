import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  let editPlayerName = <span>{playerName}</span>;
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
        className="w-auto max-w-20 bg-slate-300 text-slate-800 px-1 rounded-md focus:border-blue-500 focus:outline-none"
      />
    );

    btnCaption = "SAVE";
  }

  return (
    <li className="m-0 p-0 flex gap-8 w-56 justify-between">
      <span className="flex w-32 justify-between">
        {editPlayerName}
        <span>{symbol}</span>
      </span>
      <button
        onClick={handleEditClick}
        className="text-slate-800 bg-blue-200 opacity-50 font-black shadow-inner px-1 rounded-lg"
      >
        {btnCaption}
      </button>
    </li>
  );
}
