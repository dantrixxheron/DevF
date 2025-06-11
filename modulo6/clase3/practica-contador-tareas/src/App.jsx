import React, { useState, useEffect, useMemo } from 'react';
import './App.css'; // Asegúrate de tener un archivo CSS para los estilos

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');
  const [filtro, setFiltro] = useState('0');

  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [tareas]);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
  }, []);

  const calcularTiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  const filtrarTareas = (filtro) => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    if (filtro === '0') {
      setTareas(tareasGuardadas);
      return;
    }
    if (filtro === '60') {
      const tareasFiltradas = tareasGuardadas.filter(tarea => tarea.duracion >= 60);
      setTareas(tareasFiltradas);
      return;
    }
    const tareasFiltradas = tareasGuardadas.filter(
      tarea => tarea.duracion === parseInt(filtro)
    );
    setTareas(tareasFiltradas);
  };

  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      };
      const nuevasTareas = [...tareas, nuevaTareaObj];
      setTareas(nuevasTareas);
      localStorage.setItem('tareas', JSON.stringify(nuevasTareas));
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div className="app-container">
      <h1 className="titulo">Contador de Tareas</h1>

      <div className="formulario">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nombre de la tarea"
          className="input"
        />
        <input
          type="number"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
          placeholder="Duración en minutos"
          className="input"
        />
        <button onClick={agregarTarea} className="boton">
          Agregar tarea
        </button>
      </div>

      <h2 className="subtitulo">Tareas</h2>
      <div className="filtro">
        <select
          onChange={(e) => setFiltro(e.target.value)}
          value={filtro}
          className="select"
        >
          <option value="0">Todas las tareas</option>
          <option value="10">10 minutos</option>
          <option value="15">15 minutos</option>
          <option value="30">30 minutos</option>
          <option value="60">60 minutos o más</option>
        </select>
        <button onClick={() => filtrarTareas(filtro)} className="boton">
          Filtrar
        </button>
      </div>

      <ul className="lista">
        {tareas.map((tarea, index) => (
          <li key={index} className="item">
            <strong>{tarea.nombre}</strong> – {tarea.duracion} minutos
          </li>
        ))}
        {tareas.length === 0 && <li className="item vacio">No hay tareas agregadas.</li>}
      </ul>

      <h3 className="total">Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  );
}

export default App;