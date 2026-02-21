import { useDispatch } from "react-redux";
import { addItem } from "./cartReducer";
import styles from "./ListaProdutos.module.css";
import { CiShoppingCart } from "react-icons/ci";

function ListaProdutos() {
  const dispatch = useDispatch();
  const listaProdutos = [
    {
      id: 1,
      titulo: "Produto 1",
      preco: "120,00",
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
    },
    {
      id: 2,
      titulo: "Produto 2",
      preco: "120,00",
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
    },
    {
      id: 3,
      titulo: "Produto 3",
      preco: "120,00",
      imagem:
        "https://i.pinimg.com/736x/6f/ec/0e/6fec0e35ae54d20dd39ac97eeafaa06c.jpg",
    },
  ];

  const produto = listaProdutos.map((produto) => (
    <div className={styles.lista} key={produto.id}>
      <img src={produto.imagem} alt="" />
      <h3 className={styles.titulo}>{produto.titulo}</h3>
      <p className={styles.preco}>{produto.preco}</p>
      <button
        className={styles.botao}
        onClick={() => dispatch(addItem(produto))}
      >
        <CiShoppingCart />
      </button>
    </div>
  ));

  return <div>{produto}</div>;
}

export default ListaProdutos;
