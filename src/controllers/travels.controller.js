import httpStatus from "http-status";
import { getAllTravelsDb } from "../repository/travels.repository.js";


export async function getAllTravels(req, res) {
    const result = await getAllTravelsDb();

    return res.status(httpStatus.OK).send(result)    

}