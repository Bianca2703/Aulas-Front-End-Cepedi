import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./cartReducer";
import styles from "./ListaProdutos.module.css";
import { IoIosRemove } from "react-icons/io";

function Carrinho() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const produtos = cart.map((produto) => (
    <div className={styles.lista} key={produto.id}>
      <img src={produto.imagem} alt="" />
      <p>{produto.titulo}</p>
      <p>{produto.preco}</p>
      <button onClick={() => dispatch(removeItem(produto.id))}>
        <IoIosRemove />
      </button>
    </div>
  ));

  return <div>{produtos}</div>;
}

export default Carrinho;
