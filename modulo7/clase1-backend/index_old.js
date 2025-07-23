//lo ideal sería usar import express from 'express';
// pero como vamos a utilizar una herramienta que no lo admite de esa forma, usamos require
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Dato simulado
const post=[
    {id:1, title:"primer post"},
    {id:2, title:"segundo post"},
]
// si se hablara de una empresa, no se debería tener un dato simulado, sino una base de datos

// Endpoit para traer todos posts
app.get('/posts', (req,res)=>{
    res.json(post);
})

// Enpoint para guardar un nuevo post
app.post('/posts', (req,res)=>{
    const newPost = req.body;
    console.log('Nuevo post recibido:', newPost);
    post.push(newPost);
    res.json({message: 'Post agregado correctamente', data:newPost});
})

app.delete('/posts',(req,res)=>{
    console.log('Post eliminado', deletedPost);
    const deletedPost = post.pop();
    res.json({message: 'Último post eliminado correctamente', data: post})
})

app.listen(PORT, ()=>{
    console.log(`Servidor activo en: http://localhost:${PORT}`);
})