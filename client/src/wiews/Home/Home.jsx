/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import VideoGameContainer from "../../components/VideoGameContainer/VideoGameContainer"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideoGames } from '../../redux/actions';
import style from "./Home.module.css"



const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoGames());
    }, [dispatch])

    return (
        <div className={style.Container}>
            <h1>"soy el Home"</h1>
            <VideoGameContainer />
        </div>
    );
};

export default Home;