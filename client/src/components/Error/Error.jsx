import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import errorImg from "../assets/errorImg.gif"
import style from "../Error/Error.module.css"




const Error = ({ gamesError }) => {
    console.log(gamesError)
    const history = useHistory();
    const location = useLocation();


    return (
        <div className={style.errorA}>
            {location.pathname !== '/home' ? (
                <button onClick={() => {
                    history(`/home`);
                }}>
                    Return to all games
                </button>
            ) : null}

            <p className='error--message'>
                {`Error ${gamesError?.response.status || `404`}: ${gamesError?.response.message ||
                    `Sorry, the page you're searching for doesn't exist.`
                    }`}
            </p>

            <img className={style.errorB} src={errorImg} alt='error-gif' />
        </div>
    );
};

export default Error;