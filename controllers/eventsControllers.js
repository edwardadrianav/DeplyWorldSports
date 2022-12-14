import {event} from '../models/envents.js'

//Registrar un evento
export const registerEvent = (req, res) => {
    const evento = event(req.body);
    evento
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

// Mostrar los eventos deportivos
export const showEvents = (req, res) => {
    event
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};

//Mostrar un evento especifico
export const showEvent = (req, res) => {
    const { id } = req.params;
    event
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};

//Eliminar un evento deportivo
export const deleteEvent = (req, res) => {
    const { id } = req.params;
    event
    .deleteOne({ _id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};

//Actualizar un evento deportivo
export const updateEvent = (req, res) => {
    const { id } = req.params;
    const {fecha, equipo1, equipo2, marcador1, marcador2, tipoEvento} = req.body;
    event
    .updateOne({ _id:id}, {$set: {fecha, equipo1, equipo2, marcador1, marcador2, tipoEvento}})
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};

export default registerEvent;