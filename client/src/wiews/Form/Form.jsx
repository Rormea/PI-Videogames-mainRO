import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postVideoGame, getGenres, getPlatforms } from "../../redux/actions"
import style from "../Form/Form.module.css"


const validate = (input) => {

    let errors = {}

    if (!input.name) { errors.name = "The name field is required." }
    else if (!/^[A-Za-z0-9\s]+$/g.test(input.name)) { errors.name = "Only numbers and letters are valid." }
    else if (input.name.length < 3) { errors.name = "-Game Name must have at least 3 characters" }

    if (!input.rating) {
        errors.rating = 'The rating field is required';
    } else if (input.rating > 5) {
        errors.rating = 'The rating field must not be greater than 5.';
    } else if (input.rating < 1.0) {
        errors.rating = 'The rating field cannot be less than 1.0';
    };

    // if (!input.background_image || !/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(input.background_image)
    // ) {
    //     errors.background_image = 'invalid URL, You must use an image of the extensions (png, jpg, gif)';
    // };

    if (!input.description) errors.description = 'The description is required.';

    if (!input.released) {
        errors.released = 'Creation date is required';
    } else if (input.released.length > 10 || !/^[0-9-]+$/.test(input.released)) {
        errors.released = "A date data type must be used. (yyyy-mm-dd)"
    };

    if (input.genres.length < 1) {
        errors.genres = "-Genres is required";
    }
    if (input.platforms.length < 1) {
        errors.platforms = "-Platforms is required";
    }


    return errors;

};


const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector(state => state.allGenres)
    const platform = useSelector(state => state.allPlatforms)

    const [errors, setErrors] = useState({});


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

    const handlerOnBlur = (e) => {
        // handlerChange(e);
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
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
                platforms: input.platforms.filter(el => el !== e.target.value)
            })

    };
    // console.log(input.platforms)

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(input)
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        console.log(errors)
        if (Object.keys(errors).length === 0) {
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
        } else {
            return
        }

    };


    return (
        <div>
            <Link to='/home'><button>Back</button></Link>
            <h1>Create a New Videogame</h1>

            <form onSubmit={(e) => handlerSubmit(e)}>

                <div>
                    <label>Name</label>
                    <input type="text" value={input.name} name="name" onChange={handlerChange} onBlur={handlerOnBlur} />
                    {errors.name && (<p className={style.error}>{errors.name}</p>)}
                </div>

                <div>
                    <label>Description</label>
                    {/* <input type="tex" value={input.description} name="description" /> */}
                    <textarea value={input.description} name="description" cols="30" rows="10" onChange={handlerChange} onBlur={handlerOnBlur}></textarea>
                    {errors.description && (<p className={style.error}>{errors.description}</p>)}
                </div>

                <div>
                    <label>Released</label>
                    <input type="date" value={input.released} name="released" onChange={handlerChange} onBlur={handlerOnBlur} />
                    {errors.released && (<p className={style.error}>{errors.released}</p>)}
                </div>

                <div>
                    <label>Rating</label>
                    <input type="number" value={input.rating} name="rating" onChange={handlerChange} onBlur={handlerOnBlur} />
                    {errors.rating && (<p className={style.error}>{errors.rating}</p>)}
                </div>

                <div>
                    <label>Background_image</label>
                    <input type="text" value={input.background_image} name="background_image" onChange={handlerChange} onBlur={handlerOnBlur} />
                    {errors.background_image && (<p className={style.error}>{errors.background_image}</p>)}
                </div>

                <div>
                    <label>Genres</label>
                    <select onChange={handlerSelectGen} onBlur={handlerOnBlur}>
                        {/* <option value="none">none</option> */}
                        <option value="Delete">Delete Selection</option>
                        {genres.map((gen) => (
                            <option value={gen.name}>{gen.name}</option>
                        ))}
                    </select>
                    <ul><li>{input.genres.map(el => <button value={el} onClick={handlerClick}>{el}</button>)}</li></ul>
                    {/* <ul><li>{input.genres.map(el => el + ", ")}</li></ul> */}
                    {errors.genres && (<p className={style.error}>{errors.genres}</p>)}

                </div>

                <div>
                    <label>Platforms</label>
                    <select onChange={handlerSelectPlat} onBlur={handlerOnBlur}>
                        <option value="Delete">Delete Selection</option>
                        {platform.map((plat) => (
                            <option value={plat}>{plat}</option>
                        ))}
                    </select>
                    <ul><li>{input.platforms.map(el => <button value={el} onClick={handlerClick}>{el}</button>)}</li></ul>
                    {errors.platforms && (<p className={style.error}>{errors.platforms}</p>)}
                </div>

                <button type="submit" >Add VideoGame</button>



            </form >
        </div >
    );
};

export default Form;