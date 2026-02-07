/*import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles2/GlobalStyle";
import themes from "./styles2/theme";
import Card from "./components2/Card";*/
import Cards from "./components3/Cards";

/*function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? themes.dark : themes.light}>
      <GlobalStyle />

      <button onClick={() => setDark(!dark)}>
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      <Card
        imagem="https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg"
        titulo="Rare Beauty por Selena Gomez"
        descricao="Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue"
      />
    </ThemeProvider>
  );
}*/

function App() {
  return <Cards />;
}

export default App;
