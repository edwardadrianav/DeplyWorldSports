import mongoose, { version } from "mongoose";

const eventShema = new mongoose.Schema({

    fecha: {
        type: Date,
        require: true
    },

    equipo1: {
        type: String,
        require:true
    },

    equipo2: {
        type: String,
        require:true
    },

    marcador1: {
        type: Number,
    },

    marcador2: {
        type: Number,
    },

    tipoEvento: {
        type: String,
        require: true
    }
},
    {
        timestamps: true,
        versionkey: false
    }

);

export const event = mongoose.model("events", eventShema);
export default event;