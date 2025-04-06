/*
    1. Establecer la lista de regalos
    2. Hacer una función
    función debe leer el valor compararlo y en caso de que no buscar el siguiente y si sí hacer return de encontrado
*/
let regalos = ["coche", "moto", "bicicleta", "patinete", "patineta", "patin"];
let regalo = "patineta";
let index=0;

function buscarRegalo(i,arr,regalo){
    if(i==arr.length) {
        return "No encontrado"
    }
    if(arr[i]==regalo){
        return "Encontrado"
    }else{
        return buscarRegalo((i+1),arr,regalo)
    }
}

console.log(buscarRegalo(index,regalos,regalo));
