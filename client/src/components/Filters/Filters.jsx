import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getGenres } from "../../redux/actions"


const Filters = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    const allGenres = useSelector(state => state.allGenres);

    return (
        <div>
            <select>
                <option value="asc">A-Z</option>
                <option value="des">Z-A</option>
            </select>

            <select>
                <option value="UpRt">↑ Rating</option>
                <option value="DowRt">↓ Rating</option>
            </select>

            <select>
                {allGenres.map((gen) => {
                    return <option key={gen.id} value={gen.name}>{gen.name}</option>
                })}
            </select>

            <select>
                <option value="all">All Games</option>
                <option value="api">Api Games</option>
                <option value="cre">Created Games</option>
            </select>
        </div>
    );
};

export default Filters;