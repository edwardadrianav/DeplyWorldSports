import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const db = mongoose.connect(process.env.URI_MONGOBD).then(() => {
    console.log("Conexión correcta a la base de datos")
}).catch((error) => console.error("Error al conectar la base de datos"));

export default db;