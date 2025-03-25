const numbers = [9,3,5,6,7,2];

console.log(numbers);

//lo mejor es no modificar el arreglo original por el espacio en memoria
const copyOfNumbers = [...numbers];

console.log(copyOfNumbers);

let nombres = ["Diego", "Ana", "Lalo"];

console.log(nombres);


for(let nombre of nombres){
    console.log(nombre);
}

//objeto
const persona = {
    nombre: "Diego",
    edad: 21,
    saludar: () => {
        console.log("Hola");
    }
}

console.log(persona);

//se puede acceder a los metodos y propiedades de un objeto
const clavesObjeto = Object.keys(persona);

//crear un objeto con el prototipo de otro objeto
const miObjeto = Object.create(persona);

console.log(miObjeto);

miObjeto.saludar();
persona.saludar();
//metodos son funciones dentro de un objeto
//las funciones son externas a los objetos

//al final, los arreglos son objetos se diferencian la sintaxis y las propiedades que tienen
const frutas = ["manzana", "pera", "mango"];

frutas.shift(); //elimina el primer elemento de la lista

frutas.unshift("fresa"); //agrega un elemento al inicio de la lista

frutas.pop(); //elimina el ultimo elemento de la lista

frutas.push("sandia"); //agrega un elemento al final de la lista

console.log(frutas, frutas.length); //length es para ver cuantos elementos tiene el arreglo

//find es un metodo que recibe una funcion como parametro para encontrar un elemento en un arreglo
//find devuelve el primer elemento que cumpla con la condicion
const miFrutaFavorita = frutas.find((element) => element === "mango");

console.log(miFrutaFavorita);

//map es un metodo que recibe una funcion como parametro para modificar los elementos de un arreglo
//map devuelve un nuevo arreglo con los elementos modificados
const numbers2 = [1,3,6,8];
const doubles = numbers2.map((item, index) => {
    const doubledNumber = item * 2;
    console.log(`El numero ${item} en el indice: ${index} al multiplicarlo por 2 su resultado es: ${doubledNumber}`);
    return doubledNumber;
});

console.log(doubles);

//filter es un metodo que recibe una funcion como parametro para filtrar los elementos de un arreglo
//filter devuelve un nuevo arreglo con los elementos que cumplan con la condicion o condiciones
//filter no modifica el arreglo original
const filteredNumbers = numbers2.filter((element) => element > 5);
console.log(filteredNumbers);