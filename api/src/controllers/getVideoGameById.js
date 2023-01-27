// " vg significa videoGames"
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const apiKey = "c9549fbafc6a41b48c796562e6e5989d"

const getVgById = async (id, seeker) => {


    if (seeker === "db") return await Videogame.findByPk(id,
        {
            include: {
                model: Genre,
                attributes: ["name"],

            }
        }

    );

    if (seeker === "api") {
        let vgApiId = await axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`);
        vgApiId = vgApiId.data;

        let result = {
            id: vgApiId.id,
            name: vgApiId.name,
            description: vgApiId.description,
            released: vgApiId.released,
            rating: vgApiId.rating,
            background_image: vgApiId.background_image,
            genres: vgApiId.genres?.map(gen => gen.name),
            platforms: vgApiId.platforms?.map((plat) => plat.platform.name),
        }

        return result
    }

};




module.exports = getVgById