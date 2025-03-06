class Libro {
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
    }

    describirLibro() {
        return `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`;
    }
}

// Ejemplo de uso:
const miLibro = new Libro('El Quijote', 'Miguel de Cervantes', 1605, 'disponible');
console.log(miLibro.describirLibro());