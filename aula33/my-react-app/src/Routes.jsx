import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import CarProducts from "./pages/CarProducts";
import BikeProducts from "./pages/BikeProducts";
import Info from "./pages/Info";
import Aluno from "./pages/Aluno";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
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
      <Route path="/alunos/:id" element={<Aluno />} />

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/posts/:id" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
