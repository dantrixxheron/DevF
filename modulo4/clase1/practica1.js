class Trabajador{
    constructor(nombre, puesto, empresa, correo, telefono){
        this.nombre = nombre;
        this.puesto = puesto;
        this.empresa = empresa;
        this.correo = correo;
        this.telefono = telefono;
    }
}
let trabajadores = [];
let trabajador1 = new Trabajador("Daniela M", "Data Analyst", "XX", "cmdani@gmail.com", 1234567890);
let trabajador2 = new Trabajador("John Smith", "Developer", "YY", "juan@gmail.com", 1234567890);
let trabajador3 = new Trabajador("Jane Doe", "Designer", "ZZ", "jane@gmail.com", 1234567890);
trabajadores.push(trabajador1, trabajador2, trabajador3);

const tarjetasContainer = document.querySelector(".tarjetasContainer");

const generarTarjeta = (trabajador) => `
    <div class="tarjeta">
        <h4>${trabajador.nombre}</h4>
        <p>${trabajador.puesto} @ ${trabajador.empresa}</p>
        <p>${trabajador.correo}</p>
        <p>${trabajador.telefono}</p>
    </div>
`;
trabajadores.forEach(trabajador => {
    tarjetasContainer.insertAdjacentHTML("beforeend", generarTarjeta(trabajador));
});

