import { useContext } from "react";
import BotaoSeletor from "./BotaoSeletor";
import { ThemeContext } from "./ThemeContext";
import styles from "./Pagina.module.css";

function Pagina() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`div ${styles[theme]}`}>
      <h2>Usando Contexto</h2>
      <BotaoSeletor />
    </div>
  );
}

export default Pagina;
