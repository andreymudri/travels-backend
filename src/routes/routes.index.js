import express from "express";
import travels from "./travels.routes.js";

const router = express.Router();

router.use(travels);

export default router;
