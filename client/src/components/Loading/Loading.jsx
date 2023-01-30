import React from 'react';
import loadimg from "../assets/loadimg.png"
import style from "../Loading/Loading.module.css"




const Loading = () => {

    return (
        <div className={style.imgLoad}>
            <img src={loadimg} alt='loading' />
        </div>
    );
};

export default Loading;