const express = require("express");
const router = express.Router();
const controller = require("../controllers/H3Controllers");

router.get("/", controller.test_route);

module.exports = router;