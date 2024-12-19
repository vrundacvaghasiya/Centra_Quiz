const express = require("express");
const router = express.Router();
var email = require("../controller/Email");

router.get("/sendEmail", (req, res) => {
  return email.sendEmail(req, res);
});

module.exports = router;
