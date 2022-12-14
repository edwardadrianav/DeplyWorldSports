import Jwt from "jsonwebtoken";

export const generateToken = (uid) => {
    const expiresIn = 60*15;

    try {
        const token = Jwt.sign({uid}, process.env.JWTPRIVATEKEY, {expiresIn});
        console.log('Mi token es: ', token);
        return {token};
    } catch (error) {
        console.log(error);
    }
}

export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es válida",
    "jwt expired": "El token JWT ha expirado",
    "invalid token": "Token no válido",
    "No Bearer": "Utiliza formato Bearer, no hay ninguna clave",
    "jwt malformed": "formato no válido del JWT",
};

export default generateToken

/*CLAVE DEL JWT: WorldSports*/