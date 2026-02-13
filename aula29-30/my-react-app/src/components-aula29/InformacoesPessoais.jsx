function InformacoesPessoais() {
  let nomeCompleto = "Regina";
  let idade = 34;
  let profissao = "Engenheira";
  let estaAtivo = false;

  function ativar() {
    if (estaAtivo == true) {
      return <p>Profissão: {profissao}</p>;
    }
    return <p>Desativado </p>;
  }

  return (
    <>
      <p>Nome: {nomeCompleto}</p>
      <p>Idade: {idade}</p>
      {ativar()}
    </>
  );
}

export default InformacoesPessoais;
