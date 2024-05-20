const {Router} = require("express")

const UserController = require("../controllers/UserController")

const userRouters = Router();

const userController = new UserController();


userRouters.post("/", userController.create)
userRouters.put("/:id", userController.update)

module.exports = userRouters;