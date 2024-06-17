const {Router} = require("express")
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UserController = require("../controllers/UserController")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const userRouters = Router();
const upload  = multer(uploadConfig.MULTER)

const userController = new UserController();
const userAvatarController = new UserAvatarController()


userRouters.post("/", userController.create)
userRouters.put("/", ensureAuthenticated, userController.update)
userRouters.patch("/avatar", ensureAuthenticated, upload.single("avatar"),userAvatarController.update)

module.exports = userRouters;