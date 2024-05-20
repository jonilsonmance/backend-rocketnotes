const {Router} = require('express')

const userRouters = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")

const routes = Router();

routes.use("/users", userRouters);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter)


module.exports = routes;