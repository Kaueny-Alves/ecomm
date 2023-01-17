
import express, { json } from 'express';
import { router } from './routes.js';
import cors from 'cors';


export const app = express();

app.use(json());
app.use(cors());
app.use(router);
