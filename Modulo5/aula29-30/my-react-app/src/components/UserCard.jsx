import styles from "./UserCard.module.css";

function UserCard() {
  let foto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  let nome = "Bianca";
  let cargo = "Desenvolvedora Web";
  let isOnline = true;

  return (
    <div className={styles.container}>
      <img src={foto} alt="fotoPerfil" />
      <p>Nome: {nome}</p>
      <p>Cargo: {cargo}</p>
      <div
        className={isOnline == true ? styles.isOnline : styles.isOffline}
      ></div>
    </div>
  );
}

export default UserCard;
