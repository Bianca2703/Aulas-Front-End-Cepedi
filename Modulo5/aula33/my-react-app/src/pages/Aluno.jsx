import { useParams } from "react-router-dom";

function Aluno() {
  const { id } = useParams();
  return <h1>Hello, {id}!</h1>;
}

export default Aluno;
