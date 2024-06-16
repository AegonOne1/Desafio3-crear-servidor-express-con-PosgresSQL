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

const createPost = async (titulo, img, descripcion, likes) => {
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



export default { getAllPost, createPost };