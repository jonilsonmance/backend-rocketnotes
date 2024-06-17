const {Router} = require('express')

const userRouters = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")
const sessionRoutes = require("./sessions.routes")

const routes = Router();

routes.use("/users", userRouters);
routes.use("/sessions", sessionRoutes)
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter)


module.exports = routes;