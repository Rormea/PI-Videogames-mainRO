const { Videogame } = require("../db");

const createVideoGame = async (name, description, released, rating, platforms, favorites, background_image, created) => {

    const result = await Videogame.create({ name, description, released, rating, platforms, favorites, background_image, created });
    return result
};

module.exports = createVideoGame;