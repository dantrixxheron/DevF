import React, { useEffect, useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";
import './style.css'

export default function Game() {
  const [numRandom, setNumRandom] = useState(0);
  const [estadoJuego, setEstadoJuego]=useState('');
  const [cantIntentos, setCantIntentos]=useState(0);
  const [numIngresado, setNumIngresado]=useState('');
  useEffect(() => {
    setNumRandom(Math.round(Math.random()* 100))
    return () => {
      console.log('Al desmontar');
    };
  }, []);
  useEffect(()=>{
    if(parseInt(numIngresado)===numRandom){
      setEstadoJuego(`¡Correcto! Asertaste en ${cantIntentos} intentos.`)
    }else{
      if(parseInt(numIngresado)<numRandom){
        setCantIntentos(prev => prev + 1)
        setEstadoJuego('PISTA: El número ingresado es menor')
      }else if(parseInt(numIngresado)>numRandom){
        setCantIntentos(prev => prev + 1)
        setEstadoJuego('PISTA: El número ingresado es mayor')
      }
      else {
        setEstadoJuego('Inicia el juego ingresando un número entre 0 y 100')
      }
    }
  }, [numIngresado])
  return (
    <div className="container">
      <h1>Adivina el número</h1>
      <InputNumber inputValue={numIngresado} setInputValue={setNumIngresado} />
      <Message message={estadoJuego} />
      <RestartButton setCantIntentos={setCantIntentos} setEstadoJuego={setEstadoJuego} setNumIngresado={setNumIngresado} setNumRandom={setNumRandom}/>
    </div>
  );
}
