import { useEffect, useState } from "react";

function Formulario() {
  const [isValid, setIsValid] = useState(null);
  const [email, setEmail] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  function valid(emailValido) {
    if (!emailValido) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  useEffect(() => {
    setShowMessage(false);
    let timer = setTimeout(() => {
      const emailValido = /\S+@\S+\.\S+/.test(email);
      valid(emailValido);
      setShowMessage(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  return (
    <>
      <form action="">
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={handleChange}
        />
      </form>
      <p>
        {email === ""
          ? "Digite um email"
          : showMessage
            ? isValid
              ? "Email confirmado."
              : "Email inválido! Verifique se há '@' e '.'"
            : null}
      </p>
    </>
  );
}

export default Formulario;
