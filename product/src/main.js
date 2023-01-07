
import express, { json } from 'express';
import body from 'body-parser'
import { router } from './routes.js';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import apiDocs from '../api-docs.json' assert { type: "json" };

const port = 3000;
const app = express();

app.use(body.json());
app.use(cors());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

app.listen(port, () => {
  
  console.log(`Products app listening on port ${port}`)

});



