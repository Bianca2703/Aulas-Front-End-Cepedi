import "./App.css";
import Mouse from "./components35/Mouse";
import withBorder from "./components35/ExemploPratico1/withBorder";
import Greeting from "./components35/ExemploPratico1/Greeting";
import withLogger from "./components35/withLogger";
import Timer from "./components35/Timer";

function App() {
  // Create a new component with border
  const GreetingWithBorder = withBorder(Greeting);
  const GreetingwithLogger = withLogger(Greeting);

  return (
    <>
      <Greeting name="John" />
      <GreetingWithBorder name="Jane" />
      <Mouse
        render={(m) => (
          <h1>
            Posição: ({m.x}, {m.y})
          </h1>
        )}
      />
      <GreetingwithLogger name="Maria" />
      <Timer>{(s) => <h1>{s}</h1>}</Timer>

      <Timer>{(seconds) => <input value={seconds} readOnly />}</Timer>

      <Timer>
        {(seconds) => {
          if (seconds === 10) alert("10 segundos!");
          return <p>{seconds}</p>;
        }}
      </Timer>
    </>
  );
}
export default App;
