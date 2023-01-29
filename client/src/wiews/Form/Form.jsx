import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postVideoGame, getGenres, getPlatforms } from "../../redux/actions"


const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.allGenres)
    const platform = useSelector(state => state.allPlatforms)

    useEffect(() => {
        if (!genres.length) dispatch(getGenres());
        if (!platform.length) dispatch(getPlatforms());
    }, [genres, platform, dispatch]);

    const [input, setInput] = useState(
        {
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
            background_image: "",
        }
    );

    const handlerChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    };
    console.log(input)

    const handlerSelectGen = (e) => {

        e.target.value === "Delete" ? setInput({ ...input, genres: [] }) :
            // genres.map(el => el.name).includes(e.target.value) ?
            setInput({
                ...input,
                genres: [...input.genres, e.target.value]
            })

    };

    const handlerSelectPlat = (e) => {

        e.target.value === "Delete" ? setInput({ ...input, platforms: [] }) :
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value]
            })
    };

    const handlerClick = (e) => {
        // console.log(e.target.value)
        e.preventDefault()
        genres.map(el => el.name).includes(e.target.value) ?
            setInput({
                ...input,
                genres: input.genres.filter(el => el !== e.target.value)
            }) :

            setInput({
                ...input,
                platformsnres: input.platforms.filter(el => el !== e.target.value)
            })

    };
    // console.log(input.platforms)

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        dispatch(postVideoGame(input))
        alert("Personaje Creado")
        setInput({
            name: "",
            description: "",
            released: "",
            rating: "",
            genres: [],
            platforms: [],
            background_image: "",
        });
        history.push('/home')
    };


    return (
        <div>
            <Link to='/home'><button>Back</button></Link>
            <h1>Create a New Videogame</h1>

            <form onSubmit={(e) => handlerSubmit(e)}>

                <div>
                    <label>Name</label>
                    <input type="text" value={input.name} name="name" onChange={handlerChange} />
                </div>

                <div>
                    <label>Description</label>
                    {/* <input type="tex" value={input.description} name="description" /> */}
                    <textarea value={input.description} name="description" cols="30" rows="10" onChange={handlerChange}></textarea>
                </div>

                <div>
                    <label>Released</label>
                    <input type="date" value={input.released} name="released" onChange={handlerChange} />
                </div>

                <div>
                    <label>Rating</label>
                    <input type="number" value={input.rating} name="rating" onChange={handlerChange} />
                </div>

                <div>
                    <label>Background_image</label>
                    <input type="text" value={input.background_image} name="background_image" onChange={handlerChange} />
                </div>

                <div>
                    <label>Genres</label>
                    <select onChange={handlerSelectGen}>
                        {/* <option value="none">none</option> */}
                        <option value="Delete">Delete Selection</option>
                        {genres.map((gen) => (
                            <option value={gen.name}>{gen.name}</option>
                        ))}
                    </select>
                    <ul><li>{input.genres.map(el => <button value={el} onClick={handlerClick}>{el}</button>)}</li></ul>
                    {/* <ul><li>{input.genres.map(el => el + ", ")}</li></ul> */}

                </div>

                <div>
                    <label>Platforms</label>
                    <select onChange={handlerSelectPlat}>
                        <option value="Delete">Delete Selection</option>
                        {platform.map((plat) => (
                            <option value={plat}>{plat}</option>
                        ))}
                    </select>
                    <ul><li>{input.platforms.map(el => <button value={el} onClick={handlerClick}>{el}</button>)}</li></ul>
                </div>

                <button type="submit">Add VideoGame</button>



            </form >
        </div >
    );
};

export default Form;