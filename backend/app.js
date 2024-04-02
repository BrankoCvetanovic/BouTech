require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const multer = require("multer");
const express = require("express");
const path = require("path");

const app = express();

const connectDB = require("./db/connect");

const applianceRouter = require("./routes/appliances");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors());
app.use(express.static("./public"));
app.use(express.json());

app.use("/appliance", applianceRouter);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image Uploaded");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, () => console.log(`Server is listening on port 3000...`));
  } catch (error) {
    console.log(error);
  }
};

start();
