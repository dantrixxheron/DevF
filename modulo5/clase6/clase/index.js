const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));
app.get('/', (req, res)=>{
    // Enviamos el archivo index.html al cliente
    // __dirname es una variable global que contiene la ruta absoluta del directorio donde se encuentra el archivo actual
    // path.join(__dirname, 'index.html') une la ruta absoluta del directorio actual con el nombre del archivo
    res.sendFile(path.join(__dirname, '/static/index.html'));
})

app.listen(PORT)
console.log(`Servidor corriendo en http://localhost:${PORT}`);

