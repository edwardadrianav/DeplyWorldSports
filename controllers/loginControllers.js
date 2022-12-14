import bcrypt from 'bcrypt';
import usuarios from '../models/users.js';
//import jwt from 'jsonwebtoken';
//import { generateToken } from '../configs/jwtfunciones.js';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req,res) => {

    try {
        const { mail, password } = req.body;
        let user = await usuarios.findOne({ mail });

        if(!user)
        /*Validamos si el correo existe o no en la base de datos*/
        return res.status(403).json({ error:"No existe este correo" });
        /*Validamos si el password es correcto con la base de datos*/
        const respuestaPassword = await usuarios.login(mail, password)
        if(respuestaPassword){
            /*Si el password es correcto generamos el Token JWT*/
            const token = generateToken(usuarios._id);
            return res.json({ token });
        }else{
                return res.status(403).json({message: "Usuario y contraseña incorrecta"});
            }
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Error del servidor WS"});
    }

}

export default login;