const { Videogame } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const normalizeArray = require("./normalizeArray")
const apiKey = "c9549fbafc6a41b48c796562e6e5989d"


const searchVgByName = async (name) => {

    name = name.toLowerCase();
    console.log(name)
    const dbVideoGames = await Videogame.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });

    // let pages = [];
    // for (let i = 1; i <= 5; i++) {
    //     pages = [...pages, `https://api.rawg.io/api/games?key=${apiKey}&page=${i}`]
    // };

    // let apiVideoGamesPrev = await Promise.all(pages.map(page => axios.get(page)));
    // apiVideoGamesPrev = apiVideoGamesPrev?.map((el) => el.data.results).flat();
    // let apiVideoGames = normalizeArray(apiVideoGamesPrev).flat();

    let api = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${apiKey}`);
    api = api.data.results;
    let apiVideoGames = normalizeArray(api).flat();

    // const filterApiName = apiVideoGames.filter((vg) => vg.name.includes(name));
    const result = [...dbVideoGames, ...apiVideoGames].slice(0, 15)

    if (result.length === 0) { throw Error("No matches found") }
    else { return result }

};


module.exports = searchVgByName