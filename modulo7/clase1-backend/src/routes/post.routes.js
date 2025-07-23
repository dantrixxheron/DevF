const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');

router.get('/', postController.getAllPosts); // Ruta para obtener todos los posts en http://localhost:3000/post/
router.get('/:id', postController.getPostById); // Ruta para obtener un post según id en http://localhost:3000/post/[id]

router.post('/', postController.createPost); // Ruta para crear un nuevo post en http://localhost:3000/post/

router.put('/:id', postController.updatePost); // Ruta para actualizar un post según id en http://localhost:3000/post/[id]

router.delete('/:id', postController.deletePost); // Ruta para eliminar un post según id en http://localhost:3000/post/[id]
module.exports = router;