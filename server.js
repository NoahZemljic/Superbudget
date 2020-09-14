const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const conf = require("./config");

const app = express();
app.use(cors());
app.use(morgan("common"));

conf.staticContent.map((dir) => {
  app.use(express.static(path.join(__dirname, dir)));
});

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.listen(conf.serverPort, () => {
  console.log(`Server running on port ${conf.serverPort}`);
});
