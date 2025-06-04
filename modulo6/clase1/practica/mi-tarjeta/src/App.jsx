import Tarjeta from "./Tarjeta";
import React from "react";

function App() {
  var datos = [
    [
      "Daniela",
      "Ingeniero de software",
      "Hola! Este es mi N-esimo proyecto en React, pero por primera vez entendiendole jaja",
    ],
    [
      "Pablo",
      "Ingeniero de software",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus reprehenderit numquam rem culpa, quasi dolor adipisci harum, accusantium consequatur voluptate porro sapiente soluta. Excepturi earum cupiditate veniam quidem, nisi doloribus.",
    ],
    [
      "María",
      "Diseñadora gráfica",
      "¡Hola! Soy María, y me encanta crear diseños únicos y creativos.",
    ],
  ];
  return (
    <div>
      <h1>Tarjeta de Presentación</h1>
      {/* Renderizamos el componente Tarjeta */}
      {datos.map((dato, index) => (
        <Tarjeta
          key={index}
          nombre={dato[0]}
          profesion={dato[1]}
          mensaje={dato[2]}
        />
      ))}
    </div>
  );
}

export default App;
