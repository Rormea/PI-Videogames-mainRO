
import React from 'react';
import VideoGameContainer from "../../components/VideoGameContainer/VideoGameContainer"
import BtBackHome from '../../components/BtBackHome/BtBackHome'
import Filters from '../../components/Filters/Filters';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideoGames } from '../../redux/actions';
import style from "./Home.module.css"




const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoGames());
    }, [dispatch]);



    return (
        <div className={style.Container}>


            <BtBackHome />
            <br />
            <Filters />
            <VideoGameContainer />


        </div>



    );
};

export default Home;