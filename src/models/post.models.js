import pool from "../../database/config.js";


//GET

const getAllPost = async () => {
    try {
        const result = await pool.query('SELECT * FROM posts');
        return result.rows;
    } catch (error) {
        console.error('Error al obtener los post', error);
        throw error;
    }
};

//POST

const createPost = async (titulo, img, descripcion, likes = 0) => {
    try {
        const result = await pool.query('INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
            [titulo, img, descripcion, likes]
        );
        console.log(result)
        return result.rows[0];
        
    } catch (error) {
        console.error('error al crear el post', error);
        throw error;
    }
};

//PUT

const editPost = async (id, {titulo, img, descripcion, likes}) =>{
    const result = await pool.query('UPDATE posts SET titulo=$1, img=$2, descripcion=$3, likes=$4 WHERE id=$5 RETURNING *',
    [titulo, img, descripcion,likes, id]
    );
    console.log(result);
    return result.rows[0];
};

//DELETE

// const deletePost = async () =>{

// }

export default { getAllPost, createPost, editPost };