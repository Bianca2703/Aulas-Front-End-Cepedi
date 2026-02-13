import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BuscadorUsuarios from "./components/aula31/BuscadorUsuarios";
import Formulario from "./components/aula31/Formulario";
//import Component1 from './components/aula32/Component1'
//import Component2 from './components/aula32/Component2'
//import Component3 from './components/aula32/Component3'

function App() {
  /* const[count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000); 

    return() => clearTimeout(timer)
  }, []);*/

  return (
    <>
      <BuscadorUsuarios />
      <Formulario />
    </>
  );
}

export default App;
