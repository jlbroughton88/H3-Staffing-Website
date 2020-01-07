const express = require("express");
const router = express.Router();
const controller = require("../controllers/H3Controllers");

router.get("/", controller.test_route);
router.get("/finduser/:email", controller.FIND_USER);
router.get("/newuser/:uid/:email/:given_name/:family_name/:nickname", controller.ADD_USER);
router.get("/addname/:given_name/:family_name/:email", controller.ADD_NAME)

module.exports = router;