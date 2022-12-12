
const express = require('express');
const router = require('./routes.js');

const port = 3000;
const app = express();

app.use(express.json());
app.use(router);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



