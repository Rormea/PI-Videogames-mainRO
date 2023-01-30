
import React from 'react';
import VideoGameContainer from "../../components/VideoGameContainer/VideoGameContainer"
// import Filters from "../../components/Filters/Filters"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVideoGames, getGenres } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import style from "./Home.module.css"



const Home = () => {
    // Global state
    const dispatch = useDispatch();
    const gamelist = useSelector(state => state.allVideoGames)
    const genreslist = useSelector(state => state.allGenres)
    const loading = useSelector((state) => state.isLoading);
    const gamesError = useSelector((state) => state.gamesError);



    useEffect(() => {
        if (!gamelist.length) dispatch(getVideoGames());
        if (!genreslist.length) dispatch(getGenres());
    }, [gamelist, genreslist, dispatch])



    return (
        <div className={style.Container}>




            {loading && <Loading />}

            {!!Object.keys(gamesError).length && <Error gamesError={gamesError} />}


            {!Object.keys(gamesError).length && !loading && (<VideoGameContainer />)}






        </div>



    );
};

export default Home;