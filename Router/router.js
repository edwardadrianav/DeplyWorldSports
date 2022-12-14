import express from "express";
import db  from "../mongobd.js";
import {registerEvent, showEvent, showEvents, updateEvent, deleteEvent} from "../controllers/eventsControllers.js";
import {registerUser, showUser, showUsers, updateUser, deleteUser} from '../controllers/usersControllers.js';
import { login } from "../controllers/loginControllers.js";
import { requireToken } from "../Midleware/Auth.js";

export const  router = express.Router();

router.get('/', (req, res) => {
    res.send('Deploy World Sports en Heroku de nuestro Backend');
})

//Rutas de usuarios
router.post('/register', registerUser);
router.get('/showusers', requireToken, showUsers);
router.get('/showusers/:id', showUser);
router.put('/updateuser/:id', updateUser);
router.delete('/deleteusers/:id', deleteUser);
router.post('/login', login);
//router.post('/login1', requireToken, loginjwt);

//Rutas de eventos deportivos
router.post('/registerevent', registerEvent);
router.get('/showevents', requireToken, showEvents);
router.get('/showevent/:id', showEvent);
router.delete('/deleteevent/:id', deleteEvent);
router.put('/updateEvent/:id', updateEvent);

export default router;