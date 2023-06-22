import express from "express";
import { getTravels } from "../controllers/travels.controller.js";

const travels = express.Router();

travels.get('/passengers/travels',getTravels)

export default travels