import express from 'express';
import cors from 'cors';
import likeMeRouter from './src/routes/post.routes.js'
import "dotenv/config"


const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use(cors());

//router
app.use('/', likeMeRouter);



app.listen(PORT, () =>{
    console.log(`Server ON http://localhost:${PORT}`)
})