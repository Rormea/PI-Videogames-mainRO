/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
export const SET_ERROR = "SET_ERROR ";
export const SET_LOADING = "SET_LOADING ";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMEBYID = "GET_VIDEOGAMEBYID";
export const GET_VIDEOGAMEBYNAME = "GET_VIDEOGAMEBYNAME";
export const GET_GENRES = "GET_GENRES";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_ORIGIN = "FILTER_ORIGIN";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const GET_PLATFORM = "GET_PLATFORM";






export const getVideoGames = () => async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
        const apiRes = await axios.get("http://localhost:3001/videogames");
        const allVideoGames = apiRes.data;
        dispatch(
            {
                type: GET_VIDEOGAMES,
                payload: allVideoGames
            }
        );
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
    }
};

export const getVgById = (id) => async (dispatch) => {
    const apiRes = await axios.get(`http://localhost:3001/videogames/${id}`);
    const videoGameId = apiRes.data;
    dispatch(
        {
            type: GET_VIDEOGAMEBYID,
            payload: videoGameId
        }
    )
};

export const getVgByName = (name) => async (dispatch) => {
    dispatch({ type: SET_LOADING });

    try {
        const apiRes = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        const vgXName = apiRes.data
        dispatch({
            type: GET_VIDEOGAMEBYNAME,
            payload: vgXName
        })
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
    }
};



export const getGenres = () => async (dispatch) => {
    dispatch({ type: SET_LOADING });

    try {
        const apiRes = await axios.get("http://localhost:3001/genres");
        const allGenresRes = apiRes.data
        dispatch({
            type: GET_GENRES,
            payload: allGenresRes
        })
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
    }
};

export const filterByGen = (payload) => {

    return {
        type: FILTER_GENRES,
        payload
    }
};

export const filterByOrigin = (payload) => {

    return {
        type: FILTER_ORIGIN,
        payload
    }
};


export const orderByName = (payload) => {

    return {
        type: ORDER_NAME,
        payload
    }
};

export const orderByRating = (payload) => {
    console.log(payload)
    return {
        type: ORDER_RATING,
        payload
    }
};

export const postVideoGame = (payload) => async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
        const apiRes = await axios.get("http://localhost:3001/videogames", payload);
        const postVg = apiRes.data;

        return postVg

    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
    }
};

export const getPlatforms = () => async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
        const apiRes = await axios.get("http://localhost:3001/videogames");
        const allPlats = apiRes.data;
        dispatch(
            {
                type: GET_PLATFORM,
                payload: allPlats
            }
        );
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
    }
};

