
import express, { json } from 'express';
import { router } from './routes.js';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import apiDocs from '../api-docs.json' assert { type: "json" };
import {Sequelize} from 'sequelize';


const port = 3000;
const app = express();
const sequelize = new Sequelize('mysql://admin:admin@localhost:3306/products')

app.use(json());
app.use(cors());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
  console.log(`Products app listening on port ${port}`)
});



