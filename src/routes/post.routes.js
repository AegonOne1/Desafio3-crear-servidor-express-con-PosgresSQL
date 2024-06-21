import { Router } from "express";
import { addPost, getPosts, postEdit } from "../controllers/post.controller.js";


const router = Router();

router.get('/posts', getPosts)
router.post('/posts', addPost)
router.put('/posts/like/:id', postEdit)
// router.delete('/posts/id', postDelete)

export default router;