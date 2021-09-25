import React, { useState, useEffect, useContext, useReducer } from "react";

import ThemeContext from "../context/ThemeContext";
import CharTag from "./CharTag";
import Pagination from "./Pagination/Pagination";
import favoriteReducer from "../reducer/reducer";

import "./characters.css";

const initialState = {
    favorites: [],
};

const Characters = () => {
    const baseUrl = "https://rickandmortyapi.com/api/character/";

    const { darkMode } = useContext(ThemeContext);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState({});

    const fetchCharacters = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
                setError(false);
                setInfo(data.info);
            })
            .catch((fetchError) => {
                setError(true);
                console.error(fetchError);
            });
    };

    useEffect(() => {
        fetchCharacters(baseUrl);
    }, [baseUrl]);

    const handleFavoriteCLick = (favorite) => {
        const favChars = favorites.favorites;
        const duplicated = favChars.find((item) => item.id === favorite.id);
        if (!duplicated) {
            dispatch({ type: "ADD_TO_FAVORITES", payload: favorite });
        }
    };

    const removeFavoriteOnClick = (favorite) => {
        dispatch({ type: "REMOVE_FROM_FAVORITES", payload: favorite });
    };

    if (error) {
        return <div>Error</div>;
    }

    return (
        <>
            <ul>
                {favorites.favorites.map((favorite) => (
                    <li key={favorite.id}>
                        <button type="button" onClick={() => removeFavoriteOnClick(favorite)}>
                            {favorite.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={`characters ${darkMode ? "darkMode" : ""}`}>
                {characters.map((character) => (
                    <CharTag
                        key={character.id}
                        character={character}
                        darkMode={darkMode}
                        handleFavoriteCLick={handleFavoriteCLick}
                    />
                ))}
            </div>
            <Pagination baseUrl={baseUrl} fetchCharacters={fetchCharacters} info={info} />
        </>
    );
};

export default Characters;
