import postModels from "../models/post.models.js";

//GET

export const getPosts = async (req, res) =>{
    try {
        const posts = await postModels.getAllPost();
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({error: 'Error al obtener los posts'})
    }
}

//POST

export const addPost = async (req, res) => {
    try {
        const newPost = await postModels.createPost(req.body)
        res.status(201).json(newPost)
    } catch (error) {
        console.error(err)
        res.status(500).json({error: 'Error al crear un nuevo post'})
    }
}