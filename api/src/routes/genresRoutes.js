const { Router } = require('express')
const { getAllGenresHandler, apiToDbHandler } = require("../handlers/genresHandler")


const GenresRoutes = Router();

GenresRoutes.get("/", getAllGenresHandler);

GenresRoutes.post("/bulk", apiToDbHandler)



module.exports = GenresRoutes;