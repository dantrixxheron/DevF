const express = require('express');
const cors = require('cors');
const connectBD = require('./config/db');
const postRoutes = require('./routes/post.routes');
const userRoutes = require('./routes/user.routes.js'); // Importar las rutas de usuario

const app = express();

connectBD();

// Middleware
app.use(cors()); // permiten que otros desarrollos se comuniquen con este servidor
app.use(express.json()); //uso de JSON

//registra rutas
app.use('/post',postRoutes); //rutas para publicaciones
app.use('/user', userRoutes); //rutas para autenticación


module.exports=app;