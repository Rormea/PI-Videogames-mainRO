const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { getAllGenres, apiToDb } = require("../controllers/getAllGenres")


const getAllGenresHandler = async (req, res) => {
    try {
        const result = await getAllGenres();
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





module.exports = { getAllGenresHandler, apiToDbHandler }