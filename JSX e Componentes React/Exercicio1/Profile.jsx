let nome = "Márcia"
let profissao = "Médica"
let cidade = "Belo Horizonte"
let foto = "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"

function PerfilUsuario(){
    return (
        <>
        <h1>Informações do usuário</h1>
        <p>Nome: {nome}</p>
        <p>Profissão: {profissao} </p>
        <p>Cidade: {cidade} </p>
        <p><img src={foto} alt=""></img> </p>
        </>
    )
}

ReactDOM.render(<PerfilUsuario />, document.getElementById('root'));