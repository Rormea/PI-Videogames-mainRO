/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGen, filterByOrigin } from "../../redux/actions"



const Filters = () => {


    const dispatch = useDispatch();
    const Genres = useSelector(state => state.allGenres);

    const handlerFilterGen = (e) => {
        e.preventDefault()
        dispatch(filterByGen(e.target.value))
    };

    const handlerFilterOrigin = (e) => {
        e.preventDefault()
        dispatch(filterByOrigin(e.target.value))
    };


    return (
        <div>

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