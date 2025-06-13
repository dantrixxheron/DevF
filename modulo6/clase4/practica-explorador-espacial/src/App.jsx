import React, { useState, useEffect, useMemo, useRef } from "react";
import Planeta from "./Components/Planeta.jsx";
import "./App.css"; // Asegúrate de tener un archivo CSS para estilos
import ModalPlaneta from "./Components/ModalPlaneta.jsx";

function App() {
  const [planetaEditando, setPlanetaEditando] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState(
    localStorage.getItem("planetas")
      ? JSON.parse(localStorage.getItem("planetas"))
      : []
  );

  const intervaloRef = useRef(null); // para guardar el ID del setInterval

  // Función para iniciar el vuelo
  const iniciarVuelo = () => {
    if (intervaloRef.current || combustible <= 0) return; // evitar múltiples vuelos

    intervaloRef.current = setInterval(() => {
      setDistancia((prev) => prev + Math.round(Math.random() * 10 + 1));
      setCombustible((prev) =>
        Math.max(prev - Math.round(Math.random() * 10 + 1), 0)
      );
    }, 1000);

    setEstadoNave("En órbita");
  };

  // Función para detener el vuelo
  const detenerVuelo = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  // Efecto de montaje
  useEffect(() => {
    console.log("¡El panel de control está listo!");
    iniciarVuelo();

    return () => {
      detenerVuelo();
      console.log("¡El panel de control se ha apagado!");
    };
  }, []);

  // Efecto cuando cambia el combustible
  useEffect(() => {
    console.log("¡Combustible actualizado!");
    if (combustible === 0) {
      detenerVuelo();
      setEstadoNave("Sin combustible");
    }
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    detenerVuelo();
    setEstadoNave("Aterrizando");

    const nuevoPlaneta = {
      nombre: `Planeta ${planetasVisitados.length + 1}`,
      descripcion: "",
      imagen: "",
    };

    const nuevosPlanetas = [...planetasVisitados, nuevoPlaneta];
    setPlanetasVisitados(nuevosPlanetas);
    localStorage.setItem("planetas", JSON.stringify(nuevosPlanetas));
  };
  function eliminarPlaneta(nombre) {
    const nuevosPlanetas = planetasVisitados.filter((p) => p.nombre !== nombre);
    setPlanetasVisitados(nuevosPlanetas);
    localStorage.setItem("planetas", JSON.stringify(nuevosPlanetas));
  }

  const puedeVolar = combustible > 0 && estadoNave !== "En órbita";

  return (
    <div className="app-container">
      <h1 className="title">Panel de Control de la Nave Espacial</h1>
      <div className="status-panel">
        <p>🚀 Distancia recorrida: {distancia} km</p>
        <p>🛢️ Combustible restante: {combustible} litros</p>
        <p className="estado">{mensajeEstado}</p>
      </div>

      <div className="buttons">
        <button
          className="btn btn-primary"
          onClick={aterrizar}
          disabled={estadoNave === "Aterrizando" || combustible <= 0}
        >
          Aterrizar
        </button>

        <button
          className="btn btn-secondary"
          onClick={iniciarVuelo}
          disabled={!puedeVolar}
        >
          Volver a volar
        </button>
      </div>

      <h2 className="subtitulo">🌌 Bitácora de Exploración</h2>
      <div className="planetas">
        {planetasVisitados.length === 0 ? (
          <p className="sin-planetas">
            Aún no se ha aterrizado en ningún planeta.
          </p>
        ) : (
          planetasVisitados.map((p, index) => (
            <div className="card-planeta" key={index}>
              <Planeta
                nombre={p.nombre}
                descripcion={p.descripcion}
                imagen={p.imagen}
              />
              <div className="card-buttons">
                <button
                  className="btn btn-danger"
                  onClick={() => eliminarPlaneta(p.nombre)}
                >
                  Eliminar
                </button>
                <button
                  className="btn btn-edit"
                  onClick={() => {
                    setPlanetaEditando(p);
                    setShowModal(true);
                  }}
                >
                  Editar
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <ModalPlaneta
          planeta={planetaEditando}
          toggleShow={showModal}
          onClose={() => setShowModal(false)}
          onSave={(updatedPlaneta) => {
            const nuevosPlanetas = planetasVisitados.map((p) =>
              p.nombre === planetaEditando.nombre ? updatedPlaneta : p
            );
            setPlanetasVisitados(nuevosPlanetas);
            localStorage.setItem("planetas", JSON.stringify(nuevosPlanetas));
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
