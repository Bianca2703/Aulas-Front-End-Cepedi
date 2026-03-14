function Card({ imagem, titulo, descricao }) {
  return (
    <div className="p-2.5 w-[200px] font-sans text-center shadow-[3px 3px 5px 6px #ccc] transition transform duration-300 ease-in-out hover:bg-orange-100 hover:scale-105">
      <img className="w-full" src={imagem} alt="" />
      <h1 className="font-medium">{titulo}</h1>
      <p className="text-sm">{descricao}</p>
    </div>
  );
}

export default Card;
