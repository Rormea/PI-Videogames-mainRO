const { Videogame, Gender } = require("../db");

const createVideoGame = async (name, description, released, rating, platforms, genres, favorites, background_image, created) => {

    // let genderDb = await Gender.findAll({
    //     where: {
    //         name: genres,
    //     },
    // });


    const result = await Videogame.create({ name, description, released, rating, platforms, genres, favorites, background_image, created });
    return result
};

module.exports = createVideoGame;