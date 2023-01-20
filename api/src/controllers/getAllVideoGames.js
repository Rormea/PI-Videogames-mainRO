// " vg significa videoGames"
const normalizeArray = require("./normalizeArray")
const { Videogame } = require("../db");
const axios = require("axios");
const apiKey = "c9549fbafc6a41b48c796562e6e5989d"



const getAllVideoGames = async () => {

    const dbVideoGame = await Videogame.findAll();


    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages = [...pages, `https://api.rawg.io/api/games?key=${apiKey}&page=${i}`]
    };

    let apiVideoGamesPrev = await Promise.all(pages.map(page => axios.get(page)));
    apiVideoGamesPrev = apiVideoGamesPrev?.map((el) => el.data.results).flat();
    let apiVideoGames = normalizeArray(apiVideoGamesPrev);


    return [...dbVideoGame, apiVideoGames].flat()
};


module.exports = getAllVideoGames