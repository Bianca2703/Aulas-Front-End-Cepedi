import Card from "./Card";

function Cards() {
  let produtos = [
    {
      id: 1,
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
      titulo: "Rare Beauty por Selena Gomez",
      descricao: "Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue",
    },
    {
      id: 2,
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
      titulo: "Rare Beauty por Selena Gomez",
      descricao: "Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue",
    },
    {
      id: 3,
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
      titulo: "Rare Beauty por Selena Gomez",
      descricao: "Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue",
    },
    {
      id: 4,
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
      titulo: "Rare Beauty por Selena Gomez",
      descricao: "Rare Beauty por Selena Gomez Soft Pinch Liquid Blush Virtue",
    },
  ];

  const newCard = produtos.map((produto) => (
    <Card
      key={produto.id}
      imagem={produto.imagem}
      titulo={produto.titulo}
      descricao={produto.descricao}
    />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
      {newCard}
    </div>
  );
}

export default Cards;
