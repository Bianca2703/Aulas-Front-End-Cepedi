import { NavLink, Link } from "react-router-dom";

function Menu() {
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? "#007bff" : "#333",
    textDecoration: isActive ? "none" : "underline",
    fontWeight: isActive ? "bold" : "normal",
    padding: "5px 10px",
  });
  return (
    <>
      <nav>
        <Link to="/">Home</Link> |<Link to="/about">About</Link> |
        <Link to="/products">Products</Link> |<Link to="/contact">Contact</Link>{" "}
        |<Link to="/alunos/1">Aluno 1</Link> |{" "}
        <Link to="/alunos/2">Aluno 2</Link> |
        <Link to="/customer/Emil">Emil</Link> |
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link>
      </nav>
      <nav style={{ marginBottom: "20px" }}>
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>{" "}
        |{" "}
        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>
      </nav>
      <nav>
        <Link to="/posts/home">Home</Link>
        <Link to="/posts/about">Sobre</Link>
        <Link to="/posts/contact">Contato</Link>
      </nav>
    </>
  );
}

export default Menu;
