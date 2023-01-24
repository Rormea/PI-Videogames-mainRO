import React from 'react';
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom';
import SeachBar from '../SeachBar/SeachBar';

const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <Link to="home">HOME</Link>
            <Link to="form">ADD VIDEO GAME</Link>
            <Link to="favorites">FAVORITES</Link>

            <SeachBar></SeachBar>

        </div>
    );
};

export default NavBar;