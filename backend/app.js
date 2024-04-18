require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

const multer = require("multer");
const express = require("express");
const path = require("path");

const app = express();

const connectDB = require("./db/connect");

const applianceRouter = require("./routes/appliances");
const itRouter = require("./routes/it");
const phoneRouter = require("./routes/phones");
const tvRouter = require("./routes/tvs");
const recommendedRouter = require("./routes/recommended");
const orderRouter = require("./routes/orders");

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors());
app.use("/static", express.static(path.join(__dirname, "images")));
app.use(express.json());

const { Tv, Phone, It, Appliance } = require("./models/Item");
const { phoneArray, appliancesArray, tvArray, itArray } = require("./populate");

app.use("/appliances", applianceRouter);
app.use("/it", itRouter);
app.use("/phones", phoneRouter);
app.use("/tvs", tvRouter);
app.use("/recommended", recommendedRouter);
app.use("/order", orderRouter);

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
