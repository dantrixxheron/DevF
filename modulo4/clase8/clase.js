/* ---------------------- Manejo de archivos en Node.js --------------------- */
// 1. Importar el módulo 'fs' para manejar archivos
const fs = require('fs');


fs.appendFile("modulo4/clase8/clase.txt","Este es mi archivo creado con Node.js", (err) => {
    if (err) throw err; // Si hay un error, lanzarlo en la consola
    console.log("Guardado"); // Mensaje de éxito
});

/* 
    fs.open('modulo4/clase8/clase2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Guardado!2');
});*/

fs.writeFile('modulo4/clase8/clase.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Guardado!3');
});

fs.appendFile(
    "modulo4/clase8/clase.txt",
    "\nEsta linea ha sido añadida",
    function(err){
        if(err){
            throw err;
        }
        console.log("Guardado!4");
    }
);

/*  Eliminar un archivo
    fs.unlink("modulo2/clase8/clase2.txt", function (err) {
    if (err){
        throw err
    } 
    console.log('File deleted!');
});*/

// crear un archivo JSON para guardar datos
const miJson = {
    dia: 10,
    mes: 4,
    ano: 2025
}

// convertir el objeto JSON a una cadena de texto para guardarlo en un archivo
const convertedJSON = JSON.stringify(miJson);
console.log(convertedJSON);

// truncate el archivo JSON para eliminar su contenido anterior
fs.truncate('modulo4/clase8/JSONDataClase.txt', 0, function(){console.log('done')})

// añadir el JSON al archivo
fs.appendFile(
    "modulo4/clase8/JSONDataClase.txt",
    convertedJSON,
    function(err){
        if(err){
            throw err;
        }
        console.log("JSON Guardado!");
    }
);


// leer el archivo JSON y convertirlo de nuevo a un objeto JSON
fs.readFile(
    "modulo4/clase8/JSONDataClase.txt",
    function(err, data){
        if(err){
            throw err
        }
        let jsonData = data.toString();
        console.log(JSON.parse(jsonData));
    }
)