import styled from "styled-components";

const CardContainer = styled.div`
  padding: 10px;
  width: 200px;
  box-shadow: 3px 3px 5px 6px #ccc;
  font-family: Sans-Serif;
  text-align: center;

  background: ${(props) => props.theme.card};
  color: ${(props) => props.theme.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.cardHover};
    transform: scale(1.05);
  }

  & h1 {
    font-size: medium;
  }

  & p {
    font-size: smaller;
  }
`;

const Img = styled.img`
  width: 100%;
`;

function Card(props) {
  return (
    <>
      <CardContainer>
        <Img className="img" src={props.imagem} alt="" />
        <h1>{props.titulo}</h1>
        <p>{props.descricao}</p>
      </CardContainer>
    </>
  );
}

export default Card;
