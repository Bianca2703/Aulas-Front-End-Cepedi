let receita = {
    nomeReceita: "Mousse de Fruta (Limão/Maracujá/Morango)",
    tempoPreparo: "40 minutos",
    nivelDificuldade: "Fácil",
    ingredientes: [
        "1 lata de leite condensado (395g)",
        "1 lata de creme de leite (com ou sem soro, 200g)",
        "1 envelope de suco em pó (sabor de sua preferência) OU suco concentrado da fruta (cerca de 1/2 copo americano)",
    ],
    preparo: "Em um liquidificador ou tigela, misture o leite condensado e o creme de leite. Adicione o suco em pó (ou o suco da fruta) e bata (ou misture vigorosamente) por 3 a 5 minutos, até obter uma consistência cremosa e aerada. Transfira o creme para taças individuais ou uma travessa grande. Leve à geladeira por, pelo menos, 30 minutos a 1 hora para firmar e gelar. "
   
}


function Receita(){
    return (
        <>
        <h1>{receita.nomeReceita }</h1>
        <p>Tempo de preparo: {receita.tempoPreparo}</p>
        <p>Nível de dificuldade: {receita.nivelDificuldade} </p>
        <p>Ingredientes: {receita.ingredientes} </p>
        <p>Preparo: {receita.preparo} </p>
        </>
    )
}

ReactDOM.render(<Receita />, document.getElementById('root'));