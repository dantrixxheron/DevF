let frutas =["fresa", "manzana","manzana","manzana", "mango", "pera", "naranja", "fresa"];
let cantFruta={}; //en equipo teníamos esto como arreglo
for (let i = 0; i < frutas.length; i++) {
    let contador=0;
    let frutaElegida=frutas[i];
    for (let j = 0; j < frutas.length; j++) {
        if(frutaElegida===frutas[j]){
            contador++
        }        
    }
    //cantFruta.push(frutaElegida); //en el primer ejercicio, agrega la fruta al arreglo cuando la cantidad era en arreglo
    cantFruta[frutaElegida]=contador;
}
//imprimir la cantidad de frutas
console.log(cantFruta);

