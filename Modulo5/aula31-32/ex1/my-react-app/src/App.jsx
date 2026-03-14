import "./App.css";
import BuscadorUsuarios from "./components/aula31/BuscadorUsuarios";
import Formulario from "./components/aula31/Formulario";
import Component1 from "./components/aula32/Component1";
//import Component2 from './components/aula32/Component2'
//import Component3 from './components/aula32/Component3'
import ThemeProvider from "./components/aula32/tarefa1/ThemeProvider";
import Pagina from "./components/aula32/tarefa1/Pagina";
import { Provider } from "react-redux";
import ListaProdutos from "./components/aula32/tarefa2/ListaProdutos";
import store from "./components/aula32/tarefa2/store";
import Carrinho from "./components/aula32/tarefa2/Carrinho";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from "react";

function App() {
  /* const[count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000); 

    return() => clearTimeout(timer)
  }, []);*/

  const [showCart, setShowCart] = useState(false);

  function onShowCart() {
    setShowCart(!showCart);
  }

  return (
    <>
      <BuscadorUsuarios />
      <Formulario />

      <ThemeProvider>
        <Pagina />
      </ThemeProvider>

      <Provider store={store}>
        <ListaProdutos />

        <button onClick={onShowCart}>
          <CiShoppingCart />
        </button>

        {showCart && <Carrinho />}
      </Provider>
    </>
  );
}

export default App;
