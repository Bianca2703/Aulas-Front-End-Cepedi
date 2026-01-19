import { useState, useEffect  } from 'react'

function BuscadorUsuarios(){
    const [nome, setnome] = useState(''); //Estado para o input
    
    const handleChange = (event) => {
        setnome(event.target.value);
    }

    return(
        <>
        <input 
        type="text"
        id='nome'
        value={nome}
        onChange={handleChange} />
        
        <p>Olá, {nome}</p>
        </>

    )
}

export default BuscadorUsuarios;