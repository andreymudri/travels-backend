import httpStatus from "http-status";
import { getAllTravelsDb, getTravelbyPage } from "../repository/travels.repository.js";


export async function getTravels(req, res) {
    const page = parseInt(req.query.page);
    if (page === null || page === undefined) {
        const result = await getAllTravelsDb();

        return res.status(httpStatus.OK).send(result)        
    }
    if (isNaN(page) || page <= 0) {
        return res.status(400).json({ error: 'Invalid page value' });
    } else if (page >=1) {
        const result = await getTravelbyPage(page);
        return res.status(httpStatus.OK).send(result);
      }
}