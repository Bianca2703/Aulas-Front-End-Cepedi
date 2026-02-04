import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import CarProducts from "./pages/CarProducts";
import BikeProducts from "./pages/BikeProducts";
import Info from "./pages/Info";
import Evento from "./components34/Evento";
import Evento2 from "./components34/Evento2";
import CadastroEvento from "./components34/CadastroEvento";
import withBorder from "./components35/withBorder";
import Greeting from "./components35/Greeting";
import Mouse from "./components35/Mouse";

function App() {
  // Create a new component with border
  const GreetingWithBorder = withBorder(Greeting);

  return (
    <BrowserRouter>
      {/*Navigation */}
      <nav>
        <Link to="/">Home</Link>| <Link to="/about">About</Link>|{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        {/*<Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link> */}
      </nav>
      <Routes>
        {/*Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>

      <Evento />
      <Evento2 />
      <CadastroEvento />
      <Greeting name="John" />
      <GreetingWithBorder name="Jane" />
      <Mouse
        render={(m) => (
          <h1>
            Posição: ({m.x}, {m.y})
          </h1>
        )}
      />
    </BrowserRouter>
  );
}
export default App;
