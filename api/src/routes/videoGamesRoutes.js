
const { Router } = require('express')

const { getAllVgHandler, getAvgHandler, CreateVgHandler } = require("../handlers/videoGamesHandler")
const validate = require("../middlewares/validate")


// " vg significa videoGames"

const vgRoutes = Router();

vgRoutes.get("/", getAllVgHandler);

vgRoutes.get("/:id", getAvgHandler);

vgRoutes.post("/", validate, CreateVgHandler)


module.exports = vgRoutes;