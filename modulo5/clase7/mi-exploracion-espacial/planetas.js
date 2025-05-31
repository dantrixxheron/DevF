const planetas = [
  {
    nombre: "Titán",
    descripcion: "La luna más grande de Saturno, con lagos de metano.",
    descubiertoEn: "1655",
    coordenadas: { x: 9.5, y: 0.1, z: 0.3 }, // Distancia media a Saturno
    habitable: false
  },
  {
    nombre: "Próxima Centauri b",
    descripcion: "Un exoplaneta rocoso en la zona habitable de su estrella.",
    descubiertoEn: "2016",
    coordenadas: { x: 4.24, y: 0.2, z: -0.1 }, // Distancia desde la Tierra en años luz
    habitable: true
  },
  {
    nombre: "Kepler-442b",
    descripcion: "Un planeta potencialmente habitable a unos 1,200 años luz.",
    descubiertoEn: "2015",
    coordenadas: { x: 1120, y: -15.2, z: 27.3 },
    habitable: true
  },
  {
    nombre: "Gliese 581g",
    descripcion: "Planeta candidato a ser habitable en el sistema Gliese 581.",
    descubiertoEn: "2010",
    coordenadas: { x: 20.3, y: -5.1, z: 2.8 },
    habitable: true
  },
  {
    nombre: "TrES-2b",
    descripcion: "Uno de los planetas más oscuros conocidos, absorbe casi toda la luz.",
    descubiertoEn: "2006",
    coordenadas: { x: 750, y: 3.4, z: 9.9 },
    habitable: false
  }
];

module.exports = planetas;
