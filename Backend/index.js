/** @format */

const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/routes");

const app = express();
var cors = require("cors");

const hostname = "127.0.0.1";
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors);

mongoose
  .connect(
    "mongodb+srv://prabin:bagale05@cluster01.tbdo5bz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {
    console.log("Connected to DB Succesfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("api/users", authRoute);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
