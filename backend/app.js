// app.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
const { mongoose } = require("mongoose");

const authRouter = require('./routes/authRouter')

const skillRouter = require('./routes/skillRouter')

require("dotenv").config({ path: "./.env" });


/** DB connections */
// mongoose.connect(process.env.DB_URL);
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const app = express();
// console.log("connecting to db ...");

// middlewares
app.use(
  cors({
    origin: true,
  })
);
// app.use(dotenv());
app.use(cookieParser());

app.disable("x-powered-by");

app.use(bodyParser.json());

app.use("/api/v1", authRouter);
app.use("/api/v1", skillRouter);

module.exports = app;
