import dotenv from "dotenv";
import { app } from "./app.js";
import swaggerUi from "swagger-ui-express";
import yaml from 'yamljs';

dotenv.config()
const port = process.env.PORT ;

const swaggerDocs = yaml.load('api-docs.yaml');

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(port, () => {
  console.log(`Account app listening on port ${port}`)

});



