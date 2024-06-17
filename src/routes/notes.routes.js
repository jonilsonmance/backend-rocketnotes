const {Router} = require("express")

const NotesController = require("../controllers/NotesController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRouters = Router();

const notesController = new NotesController();

notesRouters.use(ensureAuthenticated)

notesRouters.post("/", notesController.create)
notesRouters.get("/:id", notesController.show)
notesRouters.delete("/:id", notesController.delete)
notesRouters.get("/", notesController.index)


module.exports = notesRouters;