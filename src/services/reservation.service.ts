import { Reservation } from "../interfaces/reservation.interface";
import ReservationModel from "../models/reservation.model";



const findReservations = async (): Promise<Reservation[]> => {
    const response = await ReservationModel.find({});
    return response;
}

const createReservation = async (reservation: Reservation): Promise<Reservation> => {
    const response = await ReservationModel.create(reservation);

    return response;
}


export { findReservations, createReservation };