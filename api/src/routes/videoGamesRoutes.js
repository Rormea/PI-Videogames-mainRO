
const { Router } = require('express')

const { getAllVgHandler, getAvgHandler, CreateVgHandler, handlerDeleteCreated } = require("../handlers/videoGamesHandler")
const validate = require("../middlewares/validate")


// " vg significa videoGames"

const vgRoutes = Router();

vgRoutes.get("/", getAllVgHandler);

vgRoutes.get("/:id", getAvgHandler);

vgRoutes.post("/", validate, CreateVgHandler)

vgRoutes.delete("/:id", handlerDeleteCreated);


module.exports = vgRoutes;