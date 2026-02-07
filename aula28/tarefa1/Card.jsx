function Card({ titulo, imagem, descricao }) {
  return (
    <div className="card">
      <img className="img" src={imagem} alt="" />
      <h1 className="texto">{titulo}</h1>
      <p className="texto">{descricao}</p>
    </div>
  );
}

function App() {
  return (
    <Card
      titulo="Rare Beauty por Selena Gomez"
      imagem="https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg"
      descricao="Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue"
    />
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
