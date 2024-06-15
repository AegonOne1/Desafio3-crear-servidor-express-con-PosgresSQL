import pg from 'pg';
import "dotenv/config";

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;

const pool = new pg.pool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    allowExitOnIdle: true
});

pool.query("SELECT NOW()", (err, res) =>{
    if (err){
        console.log("Error al conectar con DB", err);
    } else {
        console.log("DB ready to work", res.row[0].now);
    };
});

export default pool;