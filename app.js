import express from 'express';
import { router } from './Router/router.js';

//const router = express.Router();
const app = express();

app.use('/', router)
app.use(express.json)

var PORT = process.env.PORT || 8000;
app.listen( PORT, () => {
    console.log(`Conexión correta al servidor http://localhost:${PORT}` )
})
