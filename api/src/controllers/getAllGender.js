const { Videogame, Gender } = require("../db");
const axios = require("axios");
const apiKey = "c9549fbafc6a41b48c796562e6e5989d"

const getAllGender = async () => {

    const result = await axios.get(`https://api.rawg.io/api/genres?key=${apiKey}`)
    const resp = result.data.results;

    const cleanResp = resp.map((el) => {
        return {
            id: el.id,
            name: el.name
        }
    })
    // console.log(cleanResp)
    return cleanResp
};


const apiToDb = async (arr) => {

    const result = await Gender.bulkCreate(arr)

    console.log(result)
    return result
};


module.exports = { getAllGender, apiToDb }



