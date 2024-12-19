const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const Email = require("./Email/routes/Email");

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api", Email);

app.listen(3002, () => {
  console.log("Server started on port 3002");
});
