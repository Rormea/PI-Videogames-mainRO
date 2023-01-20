const { Router } = require('express')
const { getAllGenderHandler, apiToDbHandler } = require("../handlers/gendersHandler")


const genderRoutes = Router();

genderRoutes.get("/", getAllGenderHandler);

genderRoutes.post("/bulk", apiToDbHandler)



module.exports = genderRoutes;