import express from 'express';
import cors from 'cors';
import { router } from './Router/router.js';

//const router = express.Router();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

var PORT = process.env.PORT || 8000;
app.listen( PORT, () => {
    console.log(`Conexión correta al servidor http://localhost:${PORT}` )
})
