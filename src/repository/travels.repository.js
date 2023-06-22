import connection from "../database/database.js";

export async function getAllTravelsDb() {
    const query = `
    SELECT p."fullName", COUNT(p) AS "viagens"
    FROM passengers AS p
    JOIN passenger_travels ON passenger_travels."passengerId" = p.id
    JOIN travels ON travels.id = passenger_travels."travelId"
    GROUP BY p."fullName"
    ORDER BY p."fullName" ASC
    LIMIT 100;
  `;
    return await connection.query(query);
}
