// var es una forma antigua de declarar variables, let es la forma moderna
var nombre = "Juan";
var nombre = "Pedro";
console.log(nombre);

//let no permite redeclarar variables
//let tiene un alcance de bloque, es decir, solo vive en el bloque donde fue declarada
let otronombre = "Juan";
/*let antes de esto te mandará error*/otronombre = "Pedro";
console.log(nombre);

//const es una variable que no puede cambiar su valor
const PI = 3.1416;
//PI=3.15; //esto te mandará error

let valor1 = 5;
let valor2 = 10;
let suma = valor1 + valor2;
console.log(suma);
let resta = valor1 - valor2;
console.log(resta);
let multiplicacion = valor1 * valor2;
console.log(multiplicacion);
let division = valor1 / valor2;
console.log(division);
let modulo = valor1 % valor2;
console.log(modulo);
let exponencial = valor1 ** valor2;
console.log(exponencial);

let numero1 = 3;
let numero2 = "3";
console.log(numero1 == numero2); //true
console.log(numero1 === numero2); //false

console.log("Operadores de comparación");
console.log(10 > 4); //mayor que
console.log(2 < 1); //menor que
console.log(10 >= 10); //mayor o igual que
console.log(10 <= 10); //menor o igual que
console.log(15 != 15); //diferente de

console.log("AND &&");

let edad = 20;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia); //true
console.log("OR ||");
let mayorDeEdad = false;
let esEstudiante = true;
console.log(mayorDeEdad || esEstudiante); //true
console.log("NOT !");
let esFinDeSemana = true;
console.log(!esFinDeSemana); //false


let calificacion = 9;
let calificacion1 = 10;
let calificacion2 = 3;
let calificacion3 = 7;
let calificacion4 = 8;




/* --------------------------------- ejemplo -------------------------------- */
let tipoMascota = "perro";
if (tipoMascota === "perro") {
    console.log("Jaula grande");
}
else if (tipoMascota === "gato") {
    console.log("Jaula mediana");
}
else if (tipoMascota === "hamster") {
    console.log("Jaula pequeña");
}
else {
    console.log("No tenemos jaulas para ese tipo de mascota");
}

/* --------------------------------- ejemplo -------------------------------- */
let luzEncendida = "amarillo";

if (luzEncendida === "verde") {
    console.log("Siga");
}
else if (luzEncendida === "amarillo") {
    console.log("Detente");
}
else if (luzEncendida === "rojo") {
    console.log("Alto");
}
else {
    console.log("No hay luz");
}

/* --------------------------------- ejemplo -------------------------------- */
edadn = 17;
tieneLicencia = true;
if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}

/* --------------------------------- ejemplo -------------------------------- */
promedio = 8;
let creditos = 10;
if(creditos<10){
    console.log("Te faltan creditos");
}else if (promedio <= 8.5) {
    console.log("Tu promedio debe subir");
}
else {
    console.log("Beca completa");
}