import express from "express";
import { getAllTravels } from "../controllers/travels.controller.js";

const travels = express.Router();

travels.get('/passengers/travels',getAllTravels)

export default travels