const { Videogame, Gender } = require("../db");
const axios = require("axios");
const { getAllGender, apiToDb } = require("../controllers/getAllGender")


const getAllGenderHandler = async (req, res) => {
    try {
        const result = await getAllGender();
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const apiToDbHandler = async (req, res) => {
    const arr = req.body
    try {
        const result = await apiToDb(arr);
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};





module.exports = { getAllGenderHandler, apiToDbHandler }