/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
export const SET_ERROR = "SET_ERROR ";
export const SET_LOADING = "SET_LOADING ";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMEBYID = "GET_VIDEOGAMEBYID";
export const GET_VIDEOGAMEBYNAME = "GET_VIDEOGAMEBYNAME";
export const GET_GENRES = "GET_GENRES";





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
    const apiRes = await axios.get(`http://localhost:3001/videogames:${id}`);
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
        const apiRes = await axios.get("http://localhost:3001/genders");
        const allGenres = apiRes.data
        dispatch({
            type: GET_GENRES,
            payload: allGenres
        })
    } catch (error) {
        dispatch({ type: SET_ERROR, payload: error });
    }
};




