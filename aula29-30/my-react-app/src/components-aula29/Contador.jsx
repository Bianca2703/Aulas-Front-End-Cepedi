import { useState } from "react";

function Contador() {
  const [increment, setIncrement] = useState(0);
  let incrementar = increment + 1;
  return (
    <>
      <h2>Contador</h2>
      <button type="button" onClick={() => setIncrement(incrementar)}>
        Count {increment}
      </button>
    </>
  );
}

export default Contador;
