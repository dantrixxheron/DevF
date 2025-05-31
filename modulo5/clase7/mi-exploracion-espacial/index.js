const planetas = require('./planetas');
// Aquí mostraremos la información de los planetas
planetas.forEach(planeta => {
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
    if (planeta.coordenadas) {
        console.log(`Latitud: ${planeta.coordenadas.x}`);
        console.log(`Longitud: ${planeta.coordenadas.y}`);
        console.log(`Altitud: ${planeta.coordenadas.z}`);
    }else {
        console.log('Coordenadas no disponibles');
    }
    console.log(`¿Es habitable? ${planeta.habitable ? 'Sí' : 'No'}`);
  console.log('---');
});