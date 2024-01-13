// Hooks
import { useState } from "react";

// style
import "./style/App.css";

//components
import CoreComp from "./components/CoreComponent";

function App() {
  return (
    <>
      <main main className="bg-[url('public/wallpaper.jpg')] bg-cover bg-no-repeat  w-screen h-screen flex justify-center items-center flex-col gap-10">
        <h1 className="text-6xl font-sans text-slate-900 font-black">Tic Tac Toe</h1>
        <CoreComp></CoreComp>
      </main>

    </>
  );
}

export default App;
