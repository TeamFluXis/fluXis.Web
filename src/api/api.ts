var express = require("express");
var router = express.Router();

var test = require("./test.ts");

router.get("/", function (req, res, next) {
    res.send("This is the main API endpoint for fluXis.");
});

router.use("/test", test);

module.exports = router;