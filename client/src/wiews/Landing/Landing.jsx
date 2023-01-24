/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Landing.module.css"
// import FondoLand from "../asset/img/FondoLand.jpg"



const Landing = () => {
    return (
        <div className={style.container}>


            <Link to="/home">
                <button className={style.boton}>PLAY</button>
            </Link>
        </div>
    );
};

export default Landing;