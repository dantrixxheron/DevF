//declarar arreglo vacio
let librosLeidos = [];

//declarar función para agregar libros
function agregarLibro(titulo) {
    librosLeidos.push(titulo);
}

agregarLibro("El principito");
agregarLibro("El alquimista");
agregarLibro("El arte de la guerra");

console.log(librosLeidos); //imprime el arreglo

function mostrarLibros() {
    let texto="Libros leídos: <br>";
    for (let i = 0; i < librosLeidos.length; i++) {
        texto += librosLeidos[i] + "<br>";
    }
    document.write(texto);
}
mostrarLibros(); //imprime los libros en la página

document.write("--------- <br>");
agregarLibro("Harry Potter");
agregarLibro("El señor de los anillos");
mostrarLibros(); 