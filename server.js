const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
require("./start/routes")(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
