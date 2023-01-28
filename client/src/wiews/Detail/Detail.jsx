
import React from 'react';
import style from "./Detail.module.css"
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVgById } from "../../redux/actions"
import noImg from "..//../components/assets/noImg.jpg"


const Detail = () => {


    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getVgById(id)); //props.params.match.id
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const detailGame = useSelector(state => state.detail);
    const dG = detailGame[0];
    const regex = /(<([^#$>]+)>)/gi;

    console.log(detailGame)

    return (
        <div >
            <div className={style.dtContainer}>
                {
                    detailGame.length > 0 ?
                        <div>
                            <h1>{dG.name}</h1>
                            <img src={dG.background_image ? dG.background_image : noImg} alt={dG.name} />

                            <h3>{dG.rating ? `Rating : ⭐${dG.rating}` : "Rating in process"}</h3>
                            <h2>{dG.platforms.length > 0 ? `Platforms : ${dG.platforms.join(', ')}` : "Platforms in process"}</h2>
                            <h2>{dG.genres ? `Genres : ${dG.genres.map(el => el.name).join(', ')}` : "Genres in process"}</h2>
                            <h2>{dG.released ? `Released : ${dG.released}` : "Released in process"}</h2>
                            <p>
                                {dG.description ? `Description : ${dG.description}`.replace(regex, " ").replace(" ", " ") : "Description in process"}

                            </p>

                        </div> : <p>Loading...</p>
                }
            </div>

            <div>
                <Link to="/home">
                    <button>Back</button>
                </Link>
            </div>

            <div>
                <Link to="/favorites">
                    <button>♥</button>
                </Link>
            </div>
        </div>
    );
};

export default Detail;