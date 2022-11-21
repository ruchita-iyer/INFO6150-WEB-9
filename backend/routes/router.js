const router = require("express").Router();
const {registerUser, authUser} = require("../controller/controller");


router.route("/").post(registerUser);
router.route("/login").post(authUser);


module.exports = router;