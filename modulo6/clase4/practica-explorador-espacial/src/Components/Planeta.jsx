import React, { useEffect } from "react";

export default function Planeta({ nombre, descripcion, imagen }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`); // Montaje

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`); // Desmontaje
    };
  }, [nombre]);

  return (
    <div className="planeta-card">
      <img src={imagen} alt={nombre} className="planeta-img" />
      <h3 className="planeta-nombre">{nombre}</h3>
      <p className="planeta-desc">{descripcion}</p>
    </div>
  );
}
