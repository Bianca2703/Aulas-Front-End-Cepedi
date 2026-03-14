import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function BotaoSeletor() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      Alterar tema
    </button>
  );
}

export default BotaoSeletor;
