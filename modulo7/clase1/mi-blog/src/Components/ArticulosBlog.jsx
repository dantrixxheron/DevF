import React, { useEffect, useState } from "react";
import './ArticulosBlog.css'

export default function ArticulosBlog(){
    const [characters, setCharacters]= useState([]);
    const [isLoading, setIsLoading]=useState([true]);
    const[error, setError]=useState(null);

    useEffect(()=>{
        //momentos de la promesa: pendiente, fulfilled y rechazada
        fetch("https://dog.ceo/api/breed/corgi/images/random/20")
            .then(res=>{
                if(!res.ok) throw new Error("Error a obtener los personajes")
                return res.json();
                })
            .then(data=>setCharacters(data.message)).catch(err=> setError(err))
            .finally(()=>setIsLoading(false));
    },[])
    if(isLoading) return <h1>Cargando articulos...</h1>
    if(error) return <h1>Error: {error.message}</h1>
    return(
        <div className="articulos">
            <h1>Imágenes de Corgies</h1>
            <div className="imgs">
            {characters.map(dog=>(
                <div className="card">
                    <img src={dog} alt="Corgi" />
                </div>
            ))}
            </div>
        </div>
    );
}