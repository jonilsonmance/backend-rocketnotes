const {Router} = require("express")

const TagsController = require("../controllers/TagsController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const tagsRouters = Router();

const tagsController = new TagsController();

tagsRouters.get("/",ensureAuthenticated, tagsController.index)



module.exports = tagsRouters;