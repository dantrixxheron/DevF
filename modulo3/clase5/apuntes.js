//1. Abstracción: Definir una clase (plantilla) de una figura geométrica
class Figura{
    constructor(color){ //Constructor: Inicializa los atributos de objetos
        this.color = color;
    }
    //Método: Función dentro de una clase
    calcularArea(){
        console.log("No sé calcular el área");
    }

    obtenerColor(){
        return this.color;
    }
    miNombre(){
        return "Hola soy una figura";
    }
}

//2. Herencia (extends): Crear una clase que herede de otra
class Circulo extends Figura{
    constructor(color, radio){
        super(color); //Llamar al constructor de la clase padre
        this.radio = radio;
    }

    calcularArea(){
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Rectangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        return this.base * this.altura;
    }
}

class Triangulo extends Figura{
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
}

//3. Instanciación: Crear objetos de una clase
let miCirculo = new Circulo("rojo", 5);
let miRectangulo = new Rectangulo("verde", 15, 4);
let miTriangulo = new Triangulo("azul", 10, 5);

console.log("Color del círculo: " + miCirculo.obtenerColor());
console.log("Color del rectangulo: " + miRectangulo.obtenerColor());
console.log("Rectangulo dice: "+miRectangulo.miNombre());

//4. Polimorfismo: Un objeto puede hacer el mismo trabajo de diferentes maneras4
mostrarArea(miCirculo);
mostrarArea(miRectangulo);
mostrarArea(miTriangulo); //No se ha implementado el método calcularArea
function mostrarArea(figura){
    console.log("El área de la figura es: " + figura.calcularArea());
}

