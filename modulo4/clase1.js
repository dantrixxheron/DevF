// poder hacer las cosas en una sola línea
// la flecha => se interpreta como return implícito
const suma = (a, b) => a + b;

console.log(suma(5,8));

const generarMensajeSaludo = (nombre) => "Hola, " + nombre;

console.log(generarMensajeSaludo("Daniela"));

//usa una callbackfunction
const array = [1,2,3,4,5,6,7,8,9];

//map si nos devuelve un nuevo arreglo con lo que solicite
const newArray = array.map((item, index) => {
    return item**item;
})
console.log(newArray);

const forEachResult = newArray.forEach((item) => {
    console.log(item);
})

console.log(forEachResult);

let nombre = "Daniela";

//retorna e inserta lo que esté entre las comillas ``
// las comillas son un template 
// y al usar ${} se puede insertar variables y se vuelve un template literal
const pElements = array.map((item) => `<h1>${item}</h1>`);
console.log(pElements);

const miDiv = document.querySelector(".mi-div");
pElements.forEach((element) => {
    miDiv.insertAdjacentHTML("beforeend", element);
})


const options = {
    isEnabled: true,
    time: 15,
    code: "Aproved"
}

const { isEnabled, time, code } = options;

console.log(isEnabled, time, code);