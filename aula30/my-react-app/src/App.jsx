import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car from './components/Car.jsx'
import Moto from './components/Moto.jsx'
import FavoriteColor from './components/FavoriteColor.jsx'

function App(props) {

  const carInfo = {
    nome: "Ford",
    model: "Mustang",
    color: "red",
    year: 1969
  };

  const motoInfo = {
    color: "yellow",
    year: 2000,
    nome: "Ford"
  }

  const motorInfo={
  cilindrada: "1000",
  }

  return(
    <>
     <Car carinfo={carInfo}/>
     <Moto atributosGerais={motoInfo} atributosMotor={motorInfo}/>
     <FavoriteColor/>
    
    </>
  )
}

export default App;

