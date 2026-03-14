import "./App.css";
import AppRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Menu from "./Menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
