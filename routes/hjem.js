var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", function (req, res, next) {
  let data = fs.readFileSync(
    path.resolve(__dirname, "../data/startstring.json")
  );
  res.render("hjem", { array: JSON.parse(data) });
});

module.exports = router;
