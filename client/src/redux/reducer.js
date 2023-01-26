/* eslint-disable array-callback-return */
import {
    GET_VIDEOGAMES, GET_VIDEOGAMEBYID, SET_ERROR,
    SET_LOADING, GET_VIDEOGAMEBYNAME, GET_GENRES,
    FILTER_GENRES
} from "./actions"



const initialState = {
    allVideoGames: [],
    allGenres: [],
    isLoading: false,
    gamesError: {},
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_LOADING:
            return { ...state, gamesError: {}, isLoading: true };

        case SET_ERROR:
            return { ...state, isLoading: false, gamesError: action.payload };

        case GET_VIDEOGAMES:
            return { ...state, allVideoGames: action.payload };

        case GET_VIDEOGAMEBYID:
            return { ...state, allVideoGames: action.payload };

        case GET_VIDEOGAMEBYNAME:
            return { ...state, allVideoGames: action.payload };

        case GET_GENRES:
            return { ...state, allGenres: action.payload };

        case FILTER_GENRES:
            const allGames = state.allVideoGames
            const actPay = action.payload
            const genresFil = actPay === "all"
            // ? allGames : allGames.filter(vg => /* vg.genres === action.payload */ console.log(vg.genres, actPay))
            if (actPay === "all") return allGames
            if (actPay !== "all") {
                allGames.filter(vg => {
                    if (vg.genres.some(gen => gen.name === actPay)) return vg.genres.map(gen => gen.name === actPay)
                });
            }
            return {
                ...state,
                allVideoGames: genresFil
            }

        default:
            return { ...state }
    }
};


export default rootReducer