import { useState } from "react";
function Evento(){
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function funcaoEvento(e){
        e.preventDefault(); //nao deixa ser enviado para backend e recarregar a página
        console.log(`Usuário ${nome} logou com email ${email} e senha ${senha}`)
    }

    return(
        <form onSubmit={funcaoEvento}>
        <label htmlFor="">Nome:</label>
        <input
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        /> <br/>

        <label htmlFor="">Email:</label>
        <input 
        placeholder="Digite seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
        /> <br/>

        <label htmlFor="">Senha::</label>
        <input 
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)} 
        /> <br/>
        <button type="submit">Cadastrar</button>
</form>
    )
}

export default Evento;