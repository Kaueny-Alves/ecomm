
import swaggerUi from "swagger-ui-express";
import yaml from 'yamljs';
import { app } from "./app.js";
import { client } from './repositories/clientDatabase.js';
import dotenv from "dotenv";

dotenv.config()
const port = process.env.PORT;

const swaggerDocs = yaml.load('api-docs.yaml');

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



