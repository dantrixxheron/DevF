import { useState } from "react";
import "../styles/ConditionalSquare.css";

export default function ConditionalSquare() {
  const [flag, setFlag] = useState(true);

  return (
    <div className={flag ? "redBox" : "blueBox"} onClick={() => setFlag(!flag)}>
      <h1>El estado de este cuadro es {flag?<strong>rojo</strong>:<strong>azul</strong>}</h1>
    </div>
  );
}
