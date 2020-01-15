const express = require("express");
const router = express.Router();
const controller = require("../controllers/H3Controllers");

router.get("/", controller.test_route);
router.get("/finduser/:email", controller.FIND_USER);
router.get("/newuser/:uid/:email/:given_name/:family_name/:nickname", controller.ADD_USER);
router.get("/addname/:given_name/:family_name/:email", controller.ADD_NAME);
router.post("/blogpost/post", controller.ADD_BLOG_POST);
router.get("/blogpost/get", controller.GET_BLOG_POSTS);
router.get("/blogpost/get/:uid", controller.GET_SELECTED_POST)

module.exports = router;