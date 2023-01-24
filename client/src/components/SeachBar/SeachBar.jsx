import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getVgByName } from "../../redux/actions"



const SeachBar = () => {

    const [findState, setFindState] = useState("");
    const dispatch = useDispatch();


    const handlerOnChange = (e) => {
        setFindState(e.target.value)
    };

    const handlerOnClick = (e) => {
        e.preventDefault()
        dispatch(getVgByName(findState));
        setFindState("");

    };


    return (
        <div>
            <input type="text"
                value={findState}
                onChange={(e) => handlerOnChange(e)}
                placeholder="Find the Video Game..."
            />

            <button type='submit' onClick={(e) => handlerOnClick(e)} >
                Go
            </button>
        </div>
    );
};

export default SeachBar;