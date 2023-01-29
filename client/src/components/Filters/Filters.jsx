/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGen, filterByOrigin, orderByName, orderByRating } from "../../redux/actions"
import { useState } from 'react';


const Filters = ({ currentPage, setCurrentPage }) => {
    // console.log(props)


    const dispatch = useDispatch();
    const [order, setOrder] = useState("");
    // useEffect(() => {
    //     dispatch(getGenres())
    // }, [dispatch])

    const Genres = useSelector(state => state.allGenres);



    const handlerFilterGen = (e) => {
        e.preventDefault()
        dispatch(filterByGen(e.target.value))
    };

    const handlerFilterOrigin = (e) => {
        e.preventDefault()
        dispatch(filterByOrigin(e.target.value))
    };

    const handlerFilterName = (e) => {
        e.preventDefault()
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    };

    const handlerFilterRating = (e) => {
        e.preventDefault()
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    };


    return (
        <div>
            <select onChange={e => handlerFilterName(e)}>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>

            <select onChange={e => handlerFilterRating(e)}>
                <option value="UpRt">↑ Rating</option>
                <option value="DowRt">↓ Rating</option>
            </select>

            <select onChange={e => handlerFilterGen(e)}>
                <option value='all'>All Genres</option>
                {Genres.map((gen) => {
                    return <option key={gen.id} value={gen.name}>{gen.name}</option>
                })}
            </select>

            <select onChange={e => handlerFilterOrigin(e)}>
                <option value="all">All Games</option>
                <option value="api">Api Games</option>
                <option value="created">Created Games</option>
            </select>
        </div>
    );
};




export default Filters