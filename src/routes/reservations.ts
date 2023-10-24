import { Router } from "express";
import {
    getReservations,
    postReservation
} from "../controllers/reservation.controller";
import { logMiddelware } from "../middleware/log";

const router = Router();

//La ruta "/reservations" se creará en base al nombre del archivo(items.ts) usando
//dynamicImport(es una propiedad de TS) en index.ts ("import(`./${cleanName}`)"")
router.get("/", logMiddelware, getReservations);

router.post("/", postReservation);

//router.put("/:id", updateReservation);

//router.delete("/:id", deleteReservation);

export { router };