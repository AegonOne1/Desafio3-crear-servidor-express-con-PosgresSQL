import  pg  from "pg";
import "dotenv/config";

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;


// Comprobacion de error al conectar con la base de datos problemas en clave
// console.log("Database connection details:", {
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     database: DB_DATABASE,
//     port: DB_PORT,
// });

const pool = new pg.Pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT,
    allowExitOnIdle: true
});

pool.query("SELECT NOW()", (err, res) =>{
    if (err){
        console.log("Error al conectar con DB", err);
    } else {
        console.log("DB ready to work", res.rows[0].now);
    };
});

export default pool;