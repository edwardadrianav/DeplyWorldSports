import {usuarios} from '../models/users.js';
import * as bcrypt from "bcrypt";

//Registro de usuarios

export const registerUser = (req, res) => {
    const user = usuarios(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({message: error}));
};

//Mostrar todos los usuarios (users)
export const showUsers = (req, res) => {
    usuarios
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};

//Mostrar un usuario especifico (user)
export const showUser = (req, res) => {
    const { id } = req.params;
    usuarios
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};

/*Actualizar un usuario
export const updateUser1 = (req, res) => {
    const { id } = req.params;
    const {nameuser, password, mail} = req.body;
    usuarios
    .updateOne({ _id:id}, {$set: {nameuser, password, mail}})
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};*/

export const updateUser =  (req, res) => {
    const { id } = req.params;
    var { nameuser, password, mail } = req.body;
    const user = this
    let salt = bcrypt.genSaltSync(12);
    let hash = bcrypt.hashSync(password, salt);
    password = hash;
    usuarios
      .updateOne({ _id: id }, { $set: { nameuser, password, mail } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  };

//borrar un usuario
export const deleteUser = (req, res) => {
    const { id } = req.params;
    usuarios
    .deleteOne({ _id:id})
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
};