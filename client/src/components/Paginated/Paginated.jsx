/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';
import style from "./Paginated.module.css"




const Paginated = ({ gamesPerPage, allVideoGames, pagination }) => {


    const numberPage = [];

    for (let i = 1; i <= Math.ceil(allVideoGames / gamesPerPage); i++) {
        numberPage.push(i)
    };

    return (
        <div>
            <nav className={style.container}>
                <ul className={style.paginatedUl}>
                    {
                        numberPage?.map((number) => (
                            <li key={number}>
                                <button className={style.number} onClick={() => pagination(number)}>{number}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Paginated;