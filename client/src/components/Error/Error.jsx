import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import errorImg from "../assets/errorImg.gif"




const Error = ({ gamesError }) => {
    console.log(gamesError)
    const history = useHistory();
    const location = useLocation();


    return (
        <div>
            {location.pathname !== '/home' ? (
                <button onClick={() => {
                    history(`/home`);
                }}>
                    Return to all games
                </button>
            ) : null}

            <img src={errorImg} alt='error-gif' />
        </div>
    );
};

export default Error;