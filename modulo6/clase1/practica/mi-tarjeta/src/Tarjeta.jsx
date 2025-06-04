import React from 'react';
function Tarjeta({key, nombre, profesion, mensaje}) {

  // Retornamos el JSX que representa la tarjeta
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', textAlign: 'center' }} key={key}>
      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </div>
  );
}

export default Tarjeta;