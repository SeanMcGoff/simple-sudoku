import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Tuple from './util/Tuple';
import "./index.css";
import SudokuTable from "./components/SudokuTable";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  const Grid: Tuple<number,81> = [0,0,0,2,6,0,7,0,1,6,8,0,0,7,0,0,9,0,1,9,0,0,0,4,5,0,0,8,2,0,1,0,0,0,4,0,0,0,4,6,0,2,9,0,0,0,5,0,0,0,3,0,2,8,0,0,9,3,0,0,0,7,4,0,4,0,0,5,0,0,3,6,7,0,3,0,1,8,0,0,0];
  const isBase: Tuple<boolean,81> = Grid.map(i => i>0) as unknown as Tuple<boolean,81>
  return (
    <div className="container flex justify-center">
      <SudokuTable Grid={Grid} isBase={isBase}></SudokuTable>
    </div>
  );
}

export default App;
