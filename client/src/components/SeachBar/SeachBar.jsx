import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVgByName } from "../../redux/actions"
import s from "../SeachBar/SearchBar.module.css"




const SeachBar = ({ setCurrentPage }) => {

    const [findState, setFindState] = useState("");
    const dispatch = useDispatch();


    const handlerOnChange = (e) => {
        setFindState(e.target.value)
    };

    const handlerOnClick = (e) => {
        e.preventDefault()
        dispatch(getVgByName(findState));
        setFindState("");
        setCurrentPage(1)

    };


    return (
        <div className={s.search}>
            <input className={s.options} type="text"
                value={findState}
                onChange={(e) => handlerOnChange(e)}
                placeholder="Find the Video Game..."
            />

            <button className={s.options} type='submit' onClick={(e) => handlerOnClick(e)} >
                Go
            </button>
        </div>
    );
};

export default SeachBar;