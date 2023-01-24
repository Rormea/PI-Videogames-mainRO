import { GET_VIDEOGAMES, GET_VIDEOGAMEBYID, SET_ERROR, SET_LOADING } from "./actions"



const initialState = {
    allVideoGames: [],
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

        default:
            return { ...state }
    }
};


export default rootReducer