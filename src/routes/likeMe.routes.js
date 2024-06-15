import { Router } from "express";
import { saludar } from "../controllers/likeMe.controller.js";

const router = Router();

router.get('/', saludar );


export default router;