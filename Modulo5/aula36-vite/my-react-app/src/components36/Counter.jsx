import { useState } from "react"

function Counter(){
    const [valor, setValor] = useState(0);

    return(
        <>
        <button onClick={() => setValor(valor + 1)}>Incrementar {valor }</button>
        </>
    )
}

export default Counter;