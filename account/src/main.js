import { app } from "./app.js";
import swaggerUi from "swagger-ui-express";
import apiDocs from '../api-docs.json' assert { type: "json" };

const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

app.listen(port, () => {
  console.log(`Account app listening on port ${port}`)

 });



