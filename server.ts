require('dotenv').config();

import express from 'express';
import { pool} from "./database/database";
import {v1Router} from "./middleware/v1/v1Router";

const server = express();
const port: number = parseInt(process.env.SERVER_PORT || '4200');

server.disable('x-powered-by')

server.use('/v1', v1Router);

pool.on('connect', () => {
    console.log('connected to the database');
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
