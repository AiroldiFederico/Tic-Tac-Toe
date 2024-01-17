

// style
import "./style/App.css";

//components
import CoreComp from "./components/CoreComponent";
import Log from "./components/Log";

function App() {

  return (
    <>
      <main main className="bg-slate-700 bg-cover bg-no-repeat  w-screen h-screen flex justify-center items-center flex-col gap-10">
        <h1 className="text-6xl font-sans text-yellow-200 font-black">Tic Tac Toe</h1>
        <CoreComp></CoreComp>
        <Log></Log>
      </main>
    </>
  );
}

export default App;
