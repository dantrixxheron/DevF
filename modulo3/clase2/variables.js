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
const PI=3.1416;
//PI=3.15; //esto te mandará error
