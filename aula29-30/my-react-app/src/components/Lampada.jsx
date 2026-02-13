import { useState } from "react";
import styles from "./Lampada.module.css";

function Lampada() {
  const [lampada, setLampada] = useState("Ligar");

  return (
    <>
      <div className={lampada === "Ligar" ? styles.on : styles.off}></div>
      <button
        onClick={() =>
          lampada === "Ligar" ? setLampada("Desligar") : setLampada("Ligar")
        }
      >
        {lampada}
      </button>
    </>
  );
}

export default Lampada;
