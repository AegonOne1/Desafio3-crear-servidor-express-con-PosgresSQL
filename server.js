import express from 'express';
import cors from 'cors';

import likeMeRouter from './src/routes/post.routes.js'


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use('/', likeMeRouter);

app.listen(PORT, () =>{
    console.log(`Server ON http://localhost:${PORT}`)
})