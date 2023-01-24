/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
export const SET_ERROR = "SET_ERROR ";
export const SET_LOADING = "SET_LOADING ";
export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAMEBYID = "GET_VIDEOGAMEBYID";





export const getVideoGames = () => async (dispatch) => {
    dispatch({ type: SET_LOADING });
    try {
        const apiData = await axios.get("http://localhost:3001/videogames");
        const allVideoGames = apiData.data;
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
    const apiData = await axios.get(`http://localhost:3001/videogames:${id}`);
    const videoGameId = apiData.data;
    dispatch(
        {
            type: GET_VIDEOGAMEBYID,
            payload: videoGameId
        }
    )
};




