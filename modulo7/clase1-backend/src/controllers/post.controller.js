// parte lógica de la aplicación que maeneja la lógica de negocio
let posts=require('../models/post.model');

// obtener todos los posts (GET)
exports.getAllPosts = (req, res) => {
    res.json(posts);
}
// obtener un post por id (GET)
exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post=posts.find((p)=>p.id===id);
    if(!post) return res.status(404).json({error: 'Post no encontrado'});
    res.json(post);
}

// crear un nuevo post (POST)
exports.createPost=(req, res)=>{
    const newPost = {
        id: posts.length + 1, // Asignar un nuevo ID
        title: req.body.title,
        content: req.body.content,
    }
    posts.push(newPost);
    res.status(201).json(newPost); // Responder con el nuevo post creado
}

// actualizar un post por id (PUT)
exports.updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index=posts.findIndex((p)=>p.id===id);
    if(index===-1) return res.status(404).json({error: 'Post no encontrado'});

    posts[index]={
        ...posts[index], // Mantener los campos existentes
        title: req.body.title,
        content: req.body.content
    }

    return res.json(posts[index]); // Responder con el post actualizado
}

// eliminar un post por id (DELETE)
exports.deletePost = (req,res) => {
    const id = parseInt(req.params.id);
    const inicial = posts.length;
    posts = posts.filter(p => p.id !== id)
    if (posts.length === inicial) return res.status(404).json({error: 'Post no encontrado'});

    // Actualizar el modulo donde esta nuestro arreglo de post
    require('../models/post.model').splice(0, require('../models/post.model').length, ...posts);

    return res.status(204).end()
};