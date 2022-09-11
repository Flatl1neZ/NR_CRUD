require("dotenv").config();

const mongoString = process.env.DATABASE_URL;
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(express.json());

app.use("/api", routes);

app.listen(8080, () => {
  console.log("Server started at ${8080}");
});
