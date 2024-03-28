require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(3000, () => console.log(`Server is listening on port 3000...`));
  } catch (error) {
    console.log(error);
  }
};

start();
