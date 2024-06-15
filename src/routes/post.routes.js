import { Router } from "express";
import { addPost, getPosts } from "../controllers/post.controller.js";


const router = Router();

// router.get('/', saludar );
router.get('/posts', getPosts)
router.post('/posts', addPost)

export default router;