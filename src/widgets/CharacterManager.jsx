import React, { useState, useEffect, useReducer } from "react";

import Characters from "../components/characters/Characters";
import Pagination from "../components/Pagination/Pagination";
import FavoriteBar from "../components/FavoriteBar/FavoriteBar";
import favoriteReducer from "../reducer/reducer";

const initialState = {
    favorites: [],
};

const CharacterManager = () => {
    const baseUrl = "https://rickandmortyapi.com/api/character/";

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
            <FavoriteBar favorites={favorites} removeFavoriteOnClick={removeFavoriteOnClick} />
            <Characters handleFavoriteCLick={handleFavoriteCLick} characters={characters} />
            <Pagination baseUrl={baseUrl} fetchCharacters={fetchCharacters} info={info} />
        </>
    );
};

export default CharacterManager;
