/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useDispatch } from 'react-redux';
import { getVideoGames } from '../../redux/actions';
import style from "./BtBackHome.module.css"




const BtBackHome = () => {


    const dispatch = useDispatch();


    const handlerClick = (e) => {
        dispatch(getVideoGames())
    };


    return (
        <div className={style.btContainer}>
            <button className={style.btrainbow} onClick={(e) => { handlerClick(e) }}>
                Back to Home
            </button>
        </div>
    );
};

export default BtBackHome;