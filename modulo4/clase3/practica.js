const productos = [
    { nombre: "Celular IDROIT", precio: 525, categoria: "Tecnología" },
    { nombre: "Laptop XUOMEI", precio: 750, categoria: "Tecnología" },
    { nombre: "Funda protectora celular IDROUIT", precio: 5, categoria: "Accesorios" },
    { nombre: "Smart band 2 IDROIT", precio: 45, categoria: "Accesorios" },
    { nombre: "Robot de limpieza XUOMEI", precio: 150, categoria: "Línea blanca TI" },
];

// Mostrar todos los productos
console.log("Productos: ", productos);

// Filtrar productos menores a 100USD
let productosMenosCien = productos.filter(producto => producto.precio < 100);
console.log(`Productos menores a 100USD`);
productosMenosCien.forEach((producto) => { 
    console.log(producto.nombre + " " + producto.precio);
});

// Ordenar los productos filtrados alfabéticamente por nombre
productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos menores a 100 ordenados alfabéticamente:");
productos.forEach((producto,index)=>{
    console.log(producto);
    
})

// Generar un nuevo arreglo con solo los nombres de los productos filtrados y ordenados
let nombresProductos = productos.map(producto => producto.nombre);
console.log("Nombres de productos ordenados:", nombresProductos);


