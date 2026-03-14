import { useState, useEffect } from "react";
import Usuarios from "./Usuarios";

function BuscadorUsuarios() {
  const [nome, setnome] = useState(""); //Estado para o input
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setnome(event.target.value); //pega o valor atual do input que o usuário digitou
  };

  async function loadUsers(signal) {
    try {
      setError(null);
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        { signal },
      );
      const data = await response.json(); //fazendo um parse para transformar em json, pois a forma anterior não é compatível
      setUsers(data);
      setLoading(false);
    } catch (error) {
      if (error.name == "AbortError") {
        return;
      } else {
        setError(error.message);
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    loadUsers(signal);

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <input type="text" id="nome" value={nome} onChange={handleChange} />

      <p>Olá, {nome}</p>

      <div>
        {error ? (
          <h2>{error}</h2>
        ) : loading ? (
          <h2>Carregando...</h2>
        ) : (
          nome !== "" &&
          users
            .filter((user) =>
              user.name.toLowerCase().includes(nome.toLowerCase()),
            )
            .map((user) => (
              <Usuarios name={user.name} email={user.email} key={user.id} />
            ))
        )}
      </div>
    </>
  );
}

export default BuscadorUsuarios;
