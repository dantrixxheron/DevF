import React from "react";

export default function RestartButton({setNumRandom, setEstadoJuego, setCantIntentos, setNumIngresado}) {
    const handleRestart = () => {
        setNumRandom(Math.round(Math.random() * 100));
        setEstadoJuego('');
        setCantIntentos(0);
        setNumIngresado(0);
    };

    return (
        <button className="restart-button" onClick={handleRestart}>
            Reiniciar Juego
        </button>
    );
}