import './App.css'
import MainButton from './Components/MainButton';
import {React, useState} from 'react';
import Form from './Components/Form';
import TitlesContainer from './Components/TitlesContainer';
function App() {
  const messages=[];
  const handleMyFirstButton= (e) => {
    console.log(e.target);
  }
  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  for (let i = 1; i < 25; i++) {
    messages.push(`Este es el título número ${i + 1}`);
  }
  return (
    <>
      <h1>¡Hola desde React!</h1>
      <MainButton text="Mi primer botón" handlingFunction={handleMyFirstButton} />
      <Form input={input} setInput={setInput} setValue={setName}></Form>
      <h2>{name}</h2>
      <TitlesContainer>
        {messages.map((message, key)=>{
          return(
            <h1 key={key}>{message}</h1>
          )
        })}
      </TitlesContainer>
    </>
  )
}

export default App
