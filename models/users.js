import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { valid } from "../ValidationMail/validMail.js";

    const userShema = new mongoose.Schema(
        {

            nameuser: {
                type: String,
                require: true,
                unique: true
            },

            password: {
                type: String,
                require: true,
            },

            mail: {
                type: String,
                require: true,
                lowercase: true,
                unique: true
            },

            emailVerified: {
                type: Boolean,
                default: false,
            }

        },

        {
            timestamps: true,
            versionKey: false,
        }

    );

userShema.pre('save', function(next){
    const user = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next();
});

/*
userShema.pre('updateOne', function(next){
    const user = this
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    next()
});
*/

/*Función login del software*/
userShema.statics.login = login;

function login (mail, password) {
    console.log('El correo es: ', mail);
    console.log('El password es: ', password);
    if (!valid(mail)) {
        throw new error ('El correo es invalido');
    }else{
        return this.findOne({ mail })
        .then( usuarios => {
            console.log(usuarios);
            if (!usuarios)
            {
                throw new error ('El correo no corresponde');
            }
            console.log('El valor del password es: ', password);
            const isMatch = bcrypt.compareSync(password, usuarios.password);
            console.log('El valor de la comparación del password es: ', isMatch);
            if(isMatch){
                return true;
            }else{
                return false;
            };

        } )
    }
} 


export const usuarios = mongoose.model("users", userShema);
export default usuarios;