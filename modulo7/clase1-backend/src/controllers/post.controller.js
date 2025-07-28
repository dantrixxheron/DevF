// parte lógica de la aplicación que maeneja la lógica de negocio
const Post = require('../models/post.model');

// obtener todos los posts (GET)
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los posts', error: err.message });

    }
}
// obtener un post por id (GET)
exports.getPostById = async(req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if (post) return res.json(post);
        return res.status(401).json({ message: 'Publicación no encontrada' });
    }catch (err) {
         return res.status(500).json({ message: 'Error al obtener la publicación',error: err.message });
    }

}

// crear un nuevo post (POST)
exports.createPost = async (req, res) => {
    const post = new Post(req.body);
    await post.save();
    return res.status(201).json(post); // Responder con el nuevo post creado
}

// actualizar un post por id (PUT)
exports.updatePost = async(req, res) => {
    const updated= await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(updated);
}

// eliminar un post por id (DELETE)
exports.deletePost = async (req, res) => {
   await Post.findByIdAndDelete(req.params.id);
    return res.status(204).end();
};