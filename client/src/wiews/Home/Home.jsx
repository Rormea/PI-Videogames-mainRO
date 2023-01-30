
import React from 'react';
import VideoGameContainer from "../../components/VideoGameContainer/VideoGameContainer"
import Filters from "../../components/Filters/Filters"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVideoGames, getGenres } from '../../redux/actions';
import style from "./Home.module.css"



const Home = () => {
    // Global state
    const dispatch = useDispatch();
    const gamelist = useSelector(state => state.allVideoGames)
    const genreslist = useSelector(state => state.allGenres)


    useEffect(() => {
        if (!gamelist.length) dispatch(getVideoGames());
        if (!genreslist.length) dispatch(getGenres());
    }, [gamelist, genreslist, dispatch])



    return (
        <div className={style.Container}>


            <Filters />
            <br />
            <VideoGameContainer

            />
            <br />




        </div>



    );
};

export default Home;