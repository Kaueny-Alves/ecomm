
import express, { json } from 'express';
import { router } from './routes.js';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import yaml from 'yamljs';
import { client } from './repositories/clientDatabase.js';

const port = 3000;
const app = express();
const swaggerDocs = yaml.load('api-docs.yaml');

app.use(json());
app.use(cors());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

const Connection = async () => {
  try {
    await client.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error.message);
  }
}

app.listen(port, () => {
  console.log(`Products app listening on port ${port}`)
  Connection();
});



