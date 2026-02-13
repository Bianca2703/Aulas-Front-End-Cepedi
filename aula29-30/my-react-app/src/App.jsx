//import { useState } from 'react'
import "./App.css";
//import Car from "./components/Car.jsx";
//import Moto from "./components/Moto.jsx";
//import FavoriteColor from "./components/FavoriteColor.jsx";
//import MeuPrimeiroComponente from "./components-aula29/MeuPrimeiroComponente.jsx";
//import Contador from "./components-aula29/Contador.jsx";
import InformacoesPessoais from "./components-aula29/InformacoesPessoais";
//import PerfilUsuario from "./components-aula29/PerfilUsuario.jsx";
import UserCard from "./components/UserCard.jsx";
import Lampada from "./components/Lampada.jsx";

function App() {
  const carInfo = {
    nome: "Ford",
    model: "Mustang",
    color: "red",
    year: 1969,
  };

  const motoInfo = {
    color: "yellow",
    year: 2000,
    nome: "Ford",
  };

  const motorInfo = {
    cilindrada: "1000",
  };

  return (
    <>
      <UserCard />
      <Lampada />
      <InformacoesPessoais />
    </>
  );
}

export default App;

/*  return (
    <>
      <Car carinfo={carInfo} />
      <Moto atributosGerais={motoInfo} atributosMotor={motorInfo} />
      <FavoriteColor />
      <InformacoesPessoais />
      <UserCard />
      <Lampada />
    </>
  );*/
