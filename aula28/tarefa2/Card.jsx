const styled = window.styled;
const { ThemeProvider, createGlobalStyle } = window.styled;
//themeProvide

const lightTheme = {
  bg: "#fff",
  text: "#000",
  card: "#eee",
  cardHover: "#ddd",
  transition: "0.4s ease",
};

const darkTheme = {
  bg: "#111",
  text: "#fff",
  card: "#222",
  cardHover: "#333",
  transition: "0.4s ease",
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }
`;

const CardContainer = styled.div`
  padding: 10px;
  width: 200px;
  box-shadow: 3px 3px 5px 6px #ccc;
  font-family: Sans-Serif;
  text-align: center;

  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;

  &:hover {
    transition:
    background: ${(props) => props.theme.cardHover};
    transform: scale(1.05);
  }

  & h1 {
    font-size: medium;
  }

  & p {
    font-size: smaller;
  }
`;

const Img = styled.img`
  width: 100%;
`;

function Card(props) {
  return (
    <>
      <CardContainer>
        <Img className="img" src={props.imagem} alt="" />
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
      </CardContainer>
    </>
  );
}

function App() {
  const [dark, setDark] = React.useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
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
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
