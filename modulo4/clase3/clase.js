const letras = ["H", "o", "l", "a", "!"];

//reduce recibe una función que se ejecuta por cada elemento del arreglo
let palabra = letras.reduce((concatenacion, letra) => concatenacion + letra);
console.log(palabra);

console.log(letras[0] + letras[1] + letras[2] + letras[3]);

let palabraFor = '';
for (let i = 0; i < letras.length; i++) {
    palabraFor += letras[i];
}

console.log(palabraFor);

const tareas = [
    {
        nombre: "Lavar trastes",
        pendiente: false
    },
    {
        nombre: "Hacer tarea",
        pendiente: false
    },
    {
        nombre: "Limpiar cuarto",
        pendiente: false
    },
    {
        nombre: "Sacar la basura",
        pendiente: true
    },
    {
        nombre: "Estudiar JS",
        pendiente: false
    },
]


//el .every recibe una función que se ejecuta por cada elemento del arreglo
//si la función retorna true para todos los elementos, el .every retorna true
//si la función retorna false para al menos un elemento, el .every retorna false
let todasLasTareasSonPendientes = tareas.every((tarea) => tarea.pendiente === true);
console.log(todasLasTareasSonPendientes);

let resultado = true;
let elementoActual = tareas[0].pendiente;
for (let i = 1; i < tareas.length; i++) {
    if(elementoActual != tareas[i].pendiente){
        resultado = false;
    }
    elementoActual = tareas[i].pendiente;
}

console.log(resultado);

function verificarAtributo(arr, key){
    let elementoActual = arr[0][key];
    for (let i = 1; i < arr.length; i++) {
        if(elementoActual != arr[i][key]){
            return false
        }
        elementoActual = arr[i][key];
    }
    return true;
}

console.log(verificarAtributo(tareas, "pendiente"));

const productos = [
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "platano",
        precio: 20
    },
    {
        nombre: "fresa",
        precio: 15
    },
    {
        nombre: "platano",
        precio: 20
    },
]

console.log(verificarAtributo(productos, "nombre"));

//el .includes recibe un valor y retorna true si el valor se encuentra en el arreglo
const incluyeO = letras.includes("o");

console.log(incluyeO);


//el .some recibe una función que se ejecuta por cada elemento del arreglo
//si la función retorna true para al menos un elemento, el .some retorna true
const unaTareaCumplida = tareas.some((elemento) => elemento.pendiente === true);
console.log(unaTareaCumplida);


const carritoCompras = {
    productos: [],
    agregarProducto: function(producto){
        this.productos.push(producto.toLowerCase());
    },
    eliminarProducto: function(producto){
        let indiceDelProducto = this.productos.indexOf(producto.toLowerCase());
        //si el producto no se encuentra en el arreglo, indexOf retorna -1
        if(indiceDelProducto === -1){
            console.log(`No se encontró ningun producto con el nombre ${producto}`);
            return;
        }
        this.productos.splice(indiceDelProducto, 1)
    },
    mostrarProductos: function(){
        this.productos.forEach((producto) => console.log(producto));
    }
}

carritoCompras.agregarProducto("Manzana");
carritoCompras.agregarProducto("Fresas");
carritoCompras.agregarProducto("Kiwi");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Fresas");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Platano")