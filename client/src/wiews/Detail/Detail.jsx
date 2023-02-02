
import React from 'react';
import s from "./Detail.module.css"
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getVgById, clear } from "../../redux/actions"
import noImg from "..//../components/assets/noImg.jpg"
import Loading from '../../components/Loading/Loading';


const Detail = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getVgById(id)); //props.params.match.id
        dispatch(clear())
    }, [dispatch, id])

    const loading = useSelector(state => state.isLoading);
    const detailGame = useSelector(state => state.detail);
    // const detailGame = detailGame[0];
    const regex = /(<([^#$>]+)>)/gi;

    // console.log(detailGame)

    const handlerBack = () => {
        history.push('/home')
    };

    return (
        <div >

            <div >
                {loading && <Loading />}
                {
                    Object.keys(detailGame).length > 0 ?
                        <div className={s.dtContainer}>

                            <img className={`${s.imgD} ${s.col}`} src={detailGame.background_image ? detailGame.background_image : noImg} alt={detailGame.name} />

                            <div className={s.col}>
                                <h1 className={s.title}>{detailGame.name}</h1>
                                <h3 className={s.datosR} >{detailGame.rating ? `Rating : ⭐${detailGame.rating}` : "Rating in process"}</h3>
                                <h2 className={s.datos} >{detailGame.platforms.length > 0 ? `Platforms : ${detailGame.platforms.join(', ')}` : "Platforms in process"}</h2>
                                <h2 className={s.datos} >{detailGame.genres ? `Genres : ${detailGame.genres.map(el => el.name).join(', ')}` : "Genres in process"}</h2>
                                <h2 className={s.datos} >{detailGame.released ? `Released : ${detailGame.released}` : "Released in process"}</h2>
                                <p className={s.pD}>
                                    {detailGame.description ? `Description: ${detailGame.description}`.replace(regex, " ").replace(" ", " ") : "Description in process"}

                                </p>
                            </div>

                        </div> : <p>Loading...</p>
                }
            </div>

            <div className={s.btn_Cont}>
                <button className={s.btn} onClick={handlerBack}>Back to Home</button>
            </div>

            {/* <div>
                <Link to="/favorites">
                    <button>♥</button>
                </Link>
            </div> */}
        </div>
    );
};

export default Detail;