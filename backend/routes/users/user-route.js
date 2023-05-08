const express = require("express");
const router = express.Router();
const userController = require('../../controller/user-controller')

router.get("/", userController.getUser);
router.get("/getuser/data/:uid", userController.getUserData);

router.post("/create", userController.createUser);
router.post("/create/data", userController.createDataUser);



module.exports = router;