import { Schema, Types, model, Model } from "mongoose";
import { Reservation } from "../interfaces/reservation.interface";

const ReservationSchema = new Schema<Reservation>(
    {
        type: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        hour: {
            type: String,
            required: true,
        },
        employee: {
            type: String,
            required: true,
        },
        user: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//"Reservations" es el nombre que la coleccion tendrá en la BD
const ReservationModel = model("reservations", ReservationSchema);
export default ReservationModel;