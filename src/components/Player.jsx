import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerName = <span>{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required 
    className="w-24 bg-blue-200 text-slate-800  rounded-md focus:border-blue-500 focus:outline-none"
    />;
  }

  return (
    <li className="m-0 p-0 flex gap-8">
      <span className="flex gap-3">

        {playerName}
        <span>{symbol}</span>

      </span>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
}
