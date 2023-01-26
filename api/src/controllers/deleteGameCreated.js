const { Videogame } = require("../db");

const deleteGameCreated = async (id) => {
    const result = await Videogame.findByPk(id);
    await result.destroy();
    return result
};

module.exports = deleteGameCreated;