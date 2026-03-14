import { useParams } from "react-router-dom";

function Posts() {
  const { id } = useParams();

  return (
    <>
      <h1>Post {id}</h1>
      <p>Este é um texto fictício do post.</p>
    </>
  );
}

export default Posts;
