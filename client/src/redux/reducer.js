/* eslint-disable array-callback-return */
import {
    GET_VIDEOGAMES, GET_VIDEOGAMEBYID, SET_ERROR,
    SET_LOADING, GET_VIDEOGAMEBYNAME, GET_GENRES,
    FILTER_GENRES, FILTER_ORIGIN, ORDER_NAME, ORDER_RATING,
    CREATE_VIDEOGAME, GET_PLATFORM, CLEAR /*ADD_FAVORITES, REMOVE_FAV*/
} from "./actions"



const initialState = {
    allVideoGames: [],
    detail: {},
    allGenres: [],
    allPlatforms: [],
    gamesAllFEver: [],
    // favorites: [],
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
            return {
                ...state,
                isLoading: false,
                allVideoGames: action.payload,
                gamesAllFEver: action.payload,
            };

        case GET_VIDEOGAMEBYID:

            return { ...state, detail: action.payload, isLoading: false };



        case GET_VIDEOGAMEBYNAME:
            return { ...state, allVideoGames: action.payload, isLoading: false, };

        case GET_GENRES:
            return { ...state, allGenres: action.payload };

        case FILTER_GENRES:
            const actPay = action.payload
            const gameAll = state.gamesAllFEver

            let filterGender = (actPay === "all")
                ? gameAll
                : gameAll.filter(vg => {
                    if (vg.genres.some(gen => gen.name === actPay)) {
                        return vg.genres.map(gen => gen.name === actPay)
                    }
                })
            return { ...state, allVideoGames: filterGender };


        case FILTER_ORIGIN:

            const filterOrigin = action.payload === "created"
                ? state.gamesAllFEver.filter(vg => vg.created)
                : state.gamesAllFEver.filter(vg => !vg.created)


            return {
                ...state,
                allVideoGames: action.payload === "all" ? state.gamesAllFEver : filterOrigin,
            };

        case ORDER_NAME:

            let orderName = action.payload === "asc" ?
                state.gamesAllFEver.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }) :
                state.gamesAllFEver.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                });
            // console.log(orderName)

            return { ...state, allVideoGames: orderName };


        case ORDER_RATING:

            let orderRating = action.payload === "UpRt"
                ? state.gamesAllFEver.sort((a, b) => b.rating - a.rating)
                : state.gamesAllFEver.sort((a, b) => a.rating - b.rating);
            console.log(orderRating)
            return { ...state, allVideoGames: orderRating };


        case GET_PLATFORM:
            const allPlats = action.payload.map(vg => vg.platforms).flat()
            const unicPlats = [...new Set(allPlats)]
            // console.log(allPlats)
            return { ...state, allPlatforms: unicPlats };

        case CREATE_VIDEOGAME:
            return { ...state, isLoading: false, };

        case CLEAR:
            return { ...state, detail: {} };

        // case ADD_FAVORITES:
        //     const onlyFav = state.allVideoGames.filter(vg => vg.id === action.payload)
        //     console.log(onlyFav)
        //     return {
        //         ...state,
        //         favorites: onlyFav,
        //         allVideoGames: [...state.allVideoGames, state.allVideoGames.favorites = true]

        //     };

        // case REMOVE_FAV:
        //     const filtered = state.favorites?.filter(fav => fav.id !== action.payload)

        //     return {
        //         ...state,
        //         favorites: filtered,
        //         allVideoGames: [...state.allVideoGames, state.allVideoGames.favorites = false]
        //     };

        // case ADD_FAVORITES:

        //     return {
        //         ...state,
        //         favorites: [...state.favorites, action.payload]
        //     };

        // case REMOVE_FAV:
        //     const filtered = state.favorites?.filter(fav => fav.id !== action.payload)

        //     return {
        //         ...state,
        //         favorites: filtered,

        //     };

        default:
            return { ...state }
    }
};


export default rootReducer