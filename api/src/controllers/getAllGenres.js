const { Videogame, Genre } = require("../db");
const axios = require("axios");
const apiKey = "c9549fbafc6a41b48c796562e6e5989d"

const getAllGenres = async () => {

    const result = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`)
    const resp = result.data.results;

    const cleanResp = await resp.map(el => el.name);
    // console.log(cleanResp)
    cleanResp.map(el => Genre.findOrCreate(
        {
            where: { name: el }
        }
    ));

    const allGenres = await Genre.findAll()

    return allGenres
};


const apiToDb = async (arr) => {

    const result = await Genre.bulkCreate(arr)

    console.log(result)
    return result
};


module.exports = { getAllGenres, apiToDb }



