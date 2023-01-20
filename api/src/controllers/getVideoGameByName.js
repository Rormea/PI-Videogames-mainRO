const { Videogame } = require("../db");
const axios = require("axios");
const normalizeArray = require("./normalizeArray")
const apiKey = "c9549fbafc6a41b48c796562e6e5989d"


const searchVgByName = async (name) => {


    const dbVideoGames = await Videogame.findAll({ where: { name } });

    let pages = [];
    for (let i = 1; i <= 5; i++) {
        pages = [...pages, `https://api.rawg.io/api/games?key=${apiKey}&page=${i}`]
    };

    let apiVideoGamesPrev = await Promise.all(pages.map(page => axios.get(page)));
    apiVideoGamesPrev = apiVideoGamesPrev?.map((el) => el.data.results).flat();
    let apiVideoGames = normalizeArray(apiVideoGamesPrev).flat();

    const filterApiName = apiVideoGames.filter((vg) => vg.name === name);

    const result = [...dbVideoGames, ...filterApiName].slice(0, 15)

    if (result.length === 0) { throw Error("No matches found") }
    else { return result }

};


module.exports = searchVgByName