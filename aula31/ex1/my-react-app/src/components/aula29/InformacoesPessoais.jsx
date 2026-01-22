function InformacoesPessoais(){
    let nomeCompleto = "Regina";
    let idade = 34;
    let profissao = "Engenheira";
    let estaAtivo = true;

    return(
        <>
        <p>Nome: {nomeCompleto}</p>
        <p>Idade: {idade}</p>
        <p>{() => {if(!estaAtivo == true){
            <p>Profissão: {profissao}</p>
        }}}</p>
        </>
    )
}

export default InformacoesPessoais;