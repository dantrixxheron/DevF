import "./App.css";
import Card from "./Components/Card";
import ConditionalSquare from "./Components/ConditionalSquare";
import Counter from "./Components/Counter";
import FilterableList from "./Components/FilterableList";
import SquareContainer from "./Components/SquareContainer";
import Timer from "./Components/Timer";
import FocusInput from './Components/FocusInput'
import Parent from './Components/useCallbackExample'
import ContadorReducer from './Components/ContadorReducer'
import { useState } from "react";

const alt = "lay down cat";
function App() {
  const [counter, setCounter] = useState(0);
  const [squareCounter, setSquareCounter] = useState(0);
  return (
    <>
      <h1>Este es mi primer componente:</h1>
      <Card
        src={
          "https://imgs.search.brave.com/FUkhAZEvEytDrkaY6ifKtGYIOgkSzXxgJJ9DYWDJR4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM1/MzE0MjI3L3Bob3Rv/L2RvbWVzdGljLXNo/b3J0aGFpci1jYXQt/cG9ydHJhaXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPVNK/ZzlrQldjc3NkZFZ3/ajV6OElQM0prd2VX/WXU5TUhscDRzSWlk/dHZDMDA9"
        }
        alt={alt}
        text="Gato 1"
      />
      <Card
        src={
          "https://imgs.search.brave.com/VWkMMdIAXb3ZcJYUYoKlySrKhG6A3GTZ2YwThobfmxc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2I5YS9mbHVm/Znktb3JhbmdlLWNh/dC0wNDEwLTU3MDY3/MDYuanBnP2ZtdA"
        }
        alt={alt}
        text="Gato 2"
      />
      <Card
        src={
          "https://imgs.search.brave.com/cRWT5aTZBzFXnYGxqmMBgU2X9CkRPJHamVs5O6mN6ek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9yYWct/ZG9sbC1jYXQtNjg3/NDk2LmpwZw"
        }
        alt={alt}
        text="Gato 3"
      />
      <Counter counter={counter} setCounter={setCounter} />
      <FilterableList />
      <Timer />
      <h1>Contador de cuadrados</h1>
      <Counter counter={squareCounter} setCounter={setSquareCounter} />
      <SquareContainer>
        {Array.from({ length: squareCounter }, (_, index) => (
          <ConditionalSquare key={index} />
        ))}
      </SquareContainer>
      <FocusInput />
      <Parent />
      <ContadorReducer />
    </>
  );
}

export default App;
