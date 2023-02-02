import React from 'react';
import loadimg from "../assets/loadimg.gif"
import style from "../Loading/Loading.module.css"




const Loading = () => {

    return (
        <div className={style.imgLoad}>
            <img className={style.img} src={loadimg} alt='loading' />
        </div>
    );
};

export default Loading;