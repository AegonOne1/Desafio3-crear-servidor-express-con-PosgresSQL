import postModels from "../models/post.models.js";

//GET

export const getPosts = async (req, res) => {
    try {
        const posts = await postModels.getAllPost();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener los posts" });
    }
};

//POST

export const addPost = async (req, res) => {
    console.log(req.body);
    const { titulo, url, descripcion, likes } = req.body;
    try {
        const newPost = await postModels.createPost(
            titulo,
            url,
            descripcion,
            likes
        );
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear un nuevo post" });
    }
};

//PUT

export const postEdit = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const { likesadd } = req.body;
        console.log(`ID: ${id}, Likes to add: ${likesadd}`)
        const updatePost = await postModels.editPost(id, likesadd );
        console.log(updatePost);
        res.status(200).json({ post: updatePost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el post" });
    }
};

//DELETE

export const postDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await postModels.deletePost(id);
        res.status(200).json({ message: 'Post eliminado con éxito', post: deletedPost });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el post' });
    }
};