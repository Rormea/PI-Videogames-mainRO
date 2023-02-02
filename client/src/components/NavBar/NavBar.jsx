import React from 'react';
import style from "./NavBar.module.css"
import { Link } from 'react-router-dom';




const NavBar = () => {
    return (
        <div className={style.mainContainer}>
            <Link className={style.options} to="/home">HOME</Link>
            <Link className={style.options} to="/form">ADD VIDEO GAME</Link>
            {/* <Link to="/favorites">FAVORITES</Link> */}





        </div>
    );
};

export default NavBar;