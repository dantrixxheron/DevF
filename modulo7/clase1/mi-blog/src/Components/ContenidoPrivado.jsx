import { useUser } from "../Context/UserContext";
import ArticulosBlog from "./ArticulosBlog";

export default function ContenidoPrivado(){
    const {user} =useUser();

    if(!user){ return <h1>🔐 Debes iniciar sesión para acceder al contenido</h1>};
    
    return(
        <div>
            <h2>Welcome {user.name}</h2>
            <ArticulosBlog />
        </div>
    )
}