const { Videogame } = require("../db");
const axios = require("axios");
const createVideoGame = require("../controllers/createVideoGame");
const getVgById = require("../controllers/getVideoGameById");
const getAllVideoGames = require("../controllers/getAllVideoGames")
const searchVgByName = require("../controllers/getVideoGameByName")


const getAllVgHandler = async (req, res) => {

    const { name } = req.query;

    try {
        const result = name ? await searchVgByName(name) : await getAllVideoGames()

        res.status(200).send(result)
    } catch (error) {
        res.status(400).send({ error: error.message })

    };
};

const getAvgHandler = async (req, res) => {
    const { id } = req.params;
    const seeker = isNaN(id) ? "db" : "api"

    try {
        const videoGameId = await getVgById(id, seeker);
        res.status(200).send(videoGameId)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};

const CreateVgHandler = async (req, res) => {
    try {
        const { name, description, released, rating, genres, platforms, favorites, background_image, created } = req.body
        const newVideoGame = await createVideoGame(name, description, released, rating, genres, platforms, favorites, background_image, created);

        res.status(201).send(newVideoGame)
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
};


module.exports = { getAllVgHandler, getAvgHandler, CreateVgHandler };