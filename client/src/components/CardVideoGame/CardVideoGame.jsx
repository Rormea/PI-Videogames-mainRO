import React from 'react';
import style from "./CardVideoGame.module.css"
import noImg from "../assets/noImg.jpg"


const CardVideoGame = (props) => {
    return (
        <div className={style.CardVideoGame}>
            <h2>{props.name}</h2>
            <img
                className={style.cardGameImg}
                src={props.img || noImg}
                alt='game'
            />
            <p>{props.rating ? `Rating: ⭐${props.rating}` : null}</p>
            <p className={style.cardGameGenres}>{props.genders?.join(', ')}</p>
        </div>
    );
};

export default CardVideoGame;