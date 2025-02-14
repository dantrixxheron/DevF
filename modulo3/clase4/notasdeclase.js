// Funciones
function Sumar(a, b) {
    let total = a + b;
    return total;
}

//llamada a la funcion
let resultado = Sumar(5, 10);
//return nos permite almacenar el resultado en una variable
console.log(resultado);
console.log(Sumar(5, 15));

Sumar(5, 10); //se ejecuta la funcion pero no se imprime el resultado


function Saludar(nombre) {
    console.log("Hola " + nombre);
}
Saludar("Juan");
Saludar("Pedro");
console.log(Sumar(2,3));

function Restar(a, b) {
    let total = a - b;
    return total;
}

console.log(Restar(10, 5)); //así no se almacena el resultado en una variable

function Casita(){
    let nombre = "Juan";
    let apellido = "Perez";
    console.log("Esta es una casita");
}
Casita();
//console.log(nombre); //no se puede acceder a la variable nombre porque está dentro de la función

let nombre = "Juan";
let edad = 30;
let ciudad="CDMX";

console.log("Él se llama " + nombre + " y tiene " + edad + " años y vive en " + ciudad); //concatenación

console.log(`Él se llama ${nombre} y tiene ${edad} años y vive en ${ciudad}`); //comillas invertidas


//Ejercicio
let usuario = prompt("¿Cuál es tu nombre?"); //los datos se guardan en tipo string
let gatos = prompt("¿Cuántos gatos tienes?");
let perros =prompt("¿Cuántos perros tienes?");
let mascotas = parseInt(gatos) + parseInt(perros); //parseInt convierte un string a número
console.log(`${usuario}! Tienes ${gatos} gatos y ${perros} perros \n En total tienes ${mascotas} mascotas`);

//vemos en los datos en un popup
alert(`${usuario}! Tienes ${gatos} gatos y ${perros} perros \n En total tienes ${mascotas} mascotas`);

//mostrar los datos en la página
document.write(`${usuario}! Tienes ${gatos} gatos y ${perros} perros <br> En total tienes ${mascotas} mascotas`);


//EJERCICIO 3: num par o impar

function ParImpar(){
    let num = parseInt(prompt("Ingresa un número"));
    if(num % 2 == 0){
        res= "par";
    }else{
        res= "impar";
    }
    console.log(`El número ${num} es ${res}`);
}
ParImpar();