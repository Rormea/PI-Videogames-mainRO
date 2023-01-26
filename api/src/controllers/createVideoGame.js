const { Videogame, Genre } = require("../db");

const createVideoGame = async (name, description, released, rating, platforms, genres, favorites, background_image, created) => {


    const newGame = await Videogame.create({ name, description, released, rating, platforms, genres, favorites, background_image, created });

    const newGenre = await Genre.findAll({
        where: {
            name: genres,
        },
    });

    await newGame.addGenres(newGenre);


    return newGame
};

module.exports = createVideoGame;