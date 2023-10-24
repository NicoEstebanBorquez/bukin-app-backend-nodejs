import { Request, Response } from "express";
import { createReservation, findReservations } from "../services/reservation.service";
import { handleHttp } from "../utils/error.handle";

const getReservations = async (req: Request, res: Response) => {
    try {
        const response = await findReservations();
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_RESERVATIONS", e);
    }
}

const postReservation = async ({ body }: Request, res: Response) => {
    try {
        const response = await createReservation(body);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_POST_RESERVATION", e);
    }
}

export { getReservations, postReservation };