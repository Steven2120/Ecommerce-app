const express = require("express");
const router = express.Router();
const { getPrivateData } = require("../controller/privateControllers");
const { private } = require("../middleware/auth");

router.route("/").get(private, getPrivateData);

module.exports = router;
