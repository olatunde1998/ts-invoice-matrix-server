require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const invoiceRoute = require("./routes/invoiceRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

var corsOptions = {
  origin: [
    "https://ts-invoice-matrix.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001",
    FRONTEND,
  ], // this is for multiple url you wish
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/invoices", invoiceRoute);
app.get("/", (req, res) => {
  res.send("Hello world, welcome to Total Secure API, thank you geodevcodes");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(PORT, () => {
      console.log(`Node API app is running on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
