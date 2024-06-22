import pool from "../../database/config.js";

//GET

const getAllPost = async () => {
  try {
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (error) {
    console.error("Error al obtener los post", error);
    throw error;
  }
};

//POST

const createPost = async (titulo, img, descripcion, likes = 0) => {
  try {
    const result = await pool.query(
      "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *",
      [titulo, img, descripcion, likes]
    );
    console.log(result);
    return result.rows[0];
  } catch (error) {
    console.error("error al crear el post", error);
    throw error;
  }
};

//PUT

const editPost = async (id, likesadd) => {
  try {
    const result = await pool.query(
      "UPDATE posts SET likes = $1 WHERE id = $2 RETURNING *",
      [likesadd, id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error al actualizar los likes del post", error);
    throw error;
  }
};

//DELETE

const deletePost = async (id) => {
  try {
    const result = await pool.query(
      "DELETE FROM posts WHERE id=$1 RETURNING *",
      [id]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error al eliminar el post", error);
    throw error;
  }
};

export default { getAllPost, createPost, editPost, deletePost };
