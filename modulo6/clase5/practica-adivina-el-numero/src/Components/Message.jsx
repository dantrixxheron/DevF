import React from "react";

export default function Message({message}){
    return (
        <div className="message">
            {message==="" ? <p>Ingresa un número para comenzar a adivinar</p> : <p>{message}</p>}
        </div>
    );
}