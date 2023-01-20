
const normalizeArray = (array) =>
    array.map((el) => {
        return {
            id: el.id,
            name: el.name,
            description: el.description,
            released: el.released,
            rating: el.rating,
            background_image: el.background_image,
            genres: el.genres?.map(gen => gen.name),
            platforms: el.platforms?.map((plat) => plat.platform.name),
            created: false,
            favorites: false
        }
    });


module.exports = normalizeArray
