import React, { useEffect, useState } from "react";
import './ArticulosBlog.css'

export default function ArticulosBlog(){
    const [articulos, setArticulos]= useState([]);
    const [isLoading, setIsLoading]=useState([true]);
    const[error, setError]=useState(null);

    useEffect(()=>{
        //momentos de la promesa: pendiente, fulfilled y rechazada
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
            .then(res=>{
                if(!res.ok) throw new Error("Error a obtener los artículos")
                return res.json();
                })
            .then(data=>setArticulos(data)).catch(err=> setError(err))
            .finally(()=>setIsLoading(false));
    },[])
    if(isLoading) return <h1>Cargando articulos...</h1>
    if(error) return <h1>Error: {error}</h1>
    return(
        <div className="articulos">
            <h1>Articulos de mi blog</h1>
            {articulos.map(articulo=>(
                <div key={articulo.id} className="card">
                    <h3>{articulo.title}</h3>
                    <p>{articulo.body}</p>
                </div>
            ))}
        </div>
    );
}