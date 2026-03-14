//usar o input ao invés do prompt
//adicionar um evento
//exibir as informações na tela


let nome = prompt("Digite seu nome:")
let idade = prompt("Digte sua idade: ")
let profissao = prompt("Digite sua profissão: ")
let AnoNasc = prompt("Digite seu ano de nascimento:")

function UserCard() {
    return (
    <>
    <h1>User Card </h1>
    <p>Nome: {nome} </p>
    <p>Idade: {idade}</p>
    <p>Profissão: {profissao} </p>
    <p>Ano nascimento: {AnoNasc} </p>
    
    </>
    
    );
    }

    ReactDOM.render(<UserCard />, document.getElementById('root'));