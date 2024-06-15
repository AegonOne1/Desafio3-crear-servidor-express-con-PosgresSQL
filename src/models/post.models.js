import pool from "../../database/config.js";


//GET

const getAllPost = async () => {
    const result = await pool.query('SELECT * FROM post');
    return result.rows;
};

//POST

const createPost = async () => {
    const {titulo, img, descripcion, likes} = post;
    const result = await post.query('INSERT INTO post (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *',
        [titulo, img, descripcion, likes]
    );
    return result.rows[0];
};



export default {getAllPost, createPost};