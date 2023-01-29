import React from 'react';
import style from "./CardVideoGame.module.css"
import noImg from "../assets/noImg.jpg"
import { Link } from "react-router-dom";


const CardVideoGame = (props) => {

    return (
        // <Link to={`/detail/${props.id}`}>

        <div className={style.CardVideoGame} >
            <h2 >{props.name}</h2>
            <Link to={`/detail/${props.id}`}>
                <img
                    className={style.cardGameImg}
                    src={props.img || noImg}
                    alt='game'
                />
            </Link>
            <p>{props.rating ? `Rating: ⭐${props.rating}` : null}</p>
            <p className={style.cardGameGenres}>{props.genres?.join(', ')}</p>
        </div>


    );
};

export default CardVideoGame;