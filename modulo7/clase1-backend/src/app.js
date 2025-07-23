const express = require('express');
const postRoutes = require('./routes/post.routes');

const app = express();
app.use(express.json());

//registra rutas
app.use('/post',postRoutes); //rutas para publicaciones


module.exports=app;