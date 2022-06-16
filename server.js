const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");
var app = express();
app.use(cors());

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));

const cloudFunctions = require("./server/routers/cloudFuncs");

app.use("/cloudFunctions", cloudFunctions);

app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT_SERVER || 8080, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT_SERVER || 8080}`
  );
});

module.exports = app;
