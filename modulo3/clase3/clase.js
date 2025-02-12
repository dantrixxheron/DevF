// Tema: Ciclos

//programa para mostrar los múltiplos de 5 hasta un numero dado por el usuario

let numero=20;
let contador=1;

while(contador<=numero){
    //codigo a iterar
    if(contador%5==0){
        console.log(contador);
    }
    contador++;
}
console.log("Fin del programa");

//numeros impares
let num2=35;
for(let i=0; i<=num2; i++){
    if(i%2!==0){
        console.log(i);
    }
}

console.log("Fin del programa");
//imprimir numeros del 1 al 10
let inicio=0;
while(inicio<=10){
    inicio++;
    console.log(inicio);
}
console.log("Fin del programa");

for(let i=1; i<=10; i++){
    console.log(i);
}
console.log("Fin del programa");

//Tema: Arreglos
let verduras=["lechuga","tomate", "cebolla", "papa", "zanahoria"];
console.log(verduras[2]);
console.log(verduras.length);
//imprimir las verduras del arreglo de manera practica sin tener que escribir cada uno
for(let i=0; i<verduras.length; i++){
    console.log(verduras[i]);
}
console.log("Fin del programa");
let personas=[]; //arreglo vacio
personas.push("Juan");
personas.push("Maria");
personas.push("Pedro");
personas.push("Ana");
console.log(personas);
personas.pop(); //elimina el ultimo elemento del arreglo
console.log(personas);
personas.unshift("Alex"); //agrega un elemento al inicio del arreglo
personas.unshift("Yolanda"); //agrega un elemento al inicio del arreglo
console.log(personas);


//Tema: Objetos
const libro={
    titulo:"El principito",
    autor:"Antoine de Saint-Exupéry",
    editorial:"Reynal & Hitchcock",
    paginas:96
}
console.log(libro.editorial);

const frutas={
    "manzana":5,
    "pera":3,
    "naranja":10,
    "fresa":15
}