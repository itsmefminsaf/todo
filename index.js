const express = require("express");
const mongoose = require("mongoose");
const path = require("node:path");

require("dotenv").config();

const port = process.env.PORT || 5000;
const db_uri = process.env.DB_URI;

const app = express();

app.use(express.static("client"));
app.use(express.json());

app.get("/", (req, res) => {
  return res.sendFile("index.html");
});

app.use("/api/todo", require("./api/todo/route"));

mongoose
  .connect(db_uri)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log(`Error connecting with mongodb : ${e}`);
  });
