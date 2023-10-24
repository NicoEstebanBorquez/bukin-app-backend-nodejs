import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";


const PORT = process.env.PORT || 3003;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log(`Conectado correctamente con MongoDB - URI:${process.env.DB_URI}`));

app.listen(PORT, () => console.log(`Escuchando por puerto ${PORT}`));