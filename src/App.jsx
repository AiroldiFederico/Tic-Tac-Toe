

// style
import "./style/App.css";

//components
import CoreComp from "./components/CoreComponent";


function App() {

  return (
    <>
      <main className="bg-slate-800 bg-cover bg-no-repeat relative w-screen h-screen flex justify-center items-center flex-col gap-10">
        <h1 className="text-6xl font-sans text-yellow-200 font-black">Tic Tac Toe</h1>

        <CoreComp></CoreComp>

      </main>
    </>
  );
}

export default App;
