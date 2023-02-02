/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
import React from 'react';
import CardVideoGame from '../CardVideoGame/CardVideoGame';
import Filters from '../Filters/Filters';
import style from "./VideoGameContainer.module.css"
import Paginated from '../Paginated/Paginated';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { orderByName, orderByRating, getVideoGames } from "../../redux/actions"
import SeachBar from '../SeachBar/SeachBar';
import s from "../Filters/Filters.module.css"



const VideoGameContainer = () => {

    const dispatch = useDispatch();


    const totalGames = useSelector(state => state.allVideoGames);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);
    const indexLastGame = currentPage * gamesPerPage //15
    const indexFirstGame = indexLastGame - gamesPerPage //0
    const currentGame = totalGames.slice(indexFirstGame, indexLastGame)
    // console.log(totalGames)

    const pagination = (numberPage) => {
        setCurrentPage(numberPage)
    };


    const [order, setOrder] = useState(true);


    const handlerFilterName = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        // setOrder(`Ordenado ${e.target.value}`);
        setOrder(!order)
    };

    const handlerFilterRating = (e) => {
        e.preventDefault()
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        // setOrder(`Ordenado ${e.target.value}`);
        setOrder(!order)
    };


    const handlerClick = (e) => {
        dispatch(getVideoGames())
        setCurrentPage(1);
    };

    return (
        <div >



            <SeachBar setCurrentPage={setCurrentPage} />

            <div className={s.filters}>
                <Filters />

                <select className={s.options} onChange={e => handlerFilterName(e)}>
                    <option value="asc">A-Z</option>
                    <option value="des">Z-A</option>
                </select>

                <select className={s.options} onChange={e => handlerFilterRating(e)}>
                    <option value="UpRt">↑ Rating</option>
                    <option value="DowRt">↓ Rating</option>
                </select>
            </div>

            <div className={style.btnC}>
                <button className={style.btn} onClick={(e) => { handlerClick(e) }}>
                    Back to Home
                </button>
            </div>


            <div>
                <Paginated
                    gamesPerPage={gamesPerPage}
                    totalGames={totalGames.length}
                    pagination={pagination}
                />
            </div>





            <div className={style.containerP}>
                {currentGame?.map((vg) => {
                    return <CardVideoGame
                        key={vg.id}
                        id={vg.id}
                        name={vg.name}
                        genres={vg.genres.map(el => el.name)}
                        img={vg.background_image}
                        rating={vg.rating}

                    />
                })}
            </div>

        </div>
    );
};

export default VideoGameContainer;