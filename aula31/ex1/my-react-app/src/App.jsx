import { useState, useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Component1 from './components/aula32/Component1'
//import Component2 from './components/aula32/Component2'
//import Component3 from './components/aula32/Component3'
import InformacoesPessoais from './components/aula29/InformacoesPessoais'

function App() {
 /* const[count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000); 

    return() => clearTimeout(timer)
  }, []);*/

  return  (
    <>
    <Component1 />
    <Component3 />
    <InformacoesPessoais />
    </>
  )

}

export default App
