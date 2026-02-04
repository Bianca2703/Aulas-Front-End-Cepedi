/*const Car = () => {

    return <h1 className="bigred">Hello Car!</h1>;
    }*/

function Card() {
  return (
    <div className="card">
      <img
        className="img"
        src="https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg"
        alt=""
      />
      <h1 className="texto">Rare Beauty por Selena Gomez</h1>
      <p className="texto">
        Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue
      </p>
    </div>
  );
}

ReactDOM.render(<Card />, document.getElementById("root"));
