// import React, { useEffect, useState } from 'react';
import style from "./CardVideoGame.module.css"
import noImg from "../assets/noImg.jpg"
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { addFavorites, removeFavorites } from '../../redux/actions';


const CardVideoGame = (props) => {

    // const dispatch = useDispatch()
    // const vgFavorites = useSelector(state => state.favorites);
    // console.log(vgFavorites)
    // const [isFav, setIsFav] = useState(false);

    // useEffect(() => {
    //     vgFavorites.forEach((fav) => {
    //         if (fav.id === props.id) {
    //             setIsFav(true)
    //         }
    //     })
    // }, [vgFavorites, props.id]);

    // const handlerFav = () => {
    //     if (isFav) {
    //         setIsFav(false)
    //         dispatch(removeFavorites(props.id))
    //     } else {
    //         setIsFav(true)
    //         dispatch(addFavorites(props.id))
    //     }
    // };
    // console.log(isFav)





    return (
        // <Link to={`/detail/${props.id}`}>

        <div className={style.CardVideoGame} >

            {/* <div>
                {
                    isFav ? (<button onClick={handlerFav}>❤️</button>)
                        : (<button onClick={handlerFav}>🤍</button>)
                }
            </div> */}

            <h2 >{props.name}</h2>
            <Link to={`/detail/${props.id}`}>
                <img
                    className={style.cardGameImg}
                    src={props.img || noImg}
                    alt='game'
                />
            </Link>
            <p>{props.rating ? `Rating: ⭐${props.rating}` : null}</p>
            <p className={style.cardGameGenres}>{props.genres?.join(', ')}</p>
        </div>


    );
};

export default CardVideoGame;