import React, { useState, useEffect, useReducer } from "react";

import Characters from "../components/characters/Characters";
import Pagination from "../components/Pagination/Pagination";
import FavoriteBar from "../components/FavoriteBar/FavoriteBar";
import Error from "../components/error/Error";
import favoriteReducer from "../reducer/reducer";

const initialState = {
    favorites: [],
};

const CharacterManager = () => {
    const baseUrl = "https://rickandmortyapi.com/api/character/";

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState({ status: false, error: null });
    const [info, setInfo] = useState({});

    const fetchCharacters = (url) => {
        fetch(url)
            .then((response) => {
                if (response.status >= 500) {
                    // Server error? (>= 500)
                    throw new Error("Internal server error. This section could not be retrieved");
                } else if (!response.ok) {
                    // Client error? (400-499) or Redirection? (300-399)
                    throw new Error("This section could not be retrieved");
                } else {
                    // Ok? (200-299)}
                    return response.json();
                }
            })
            .then((data) => {
                setCharacters(data.results);
                setError({ ...error, status: false });
                setInfo(data.info);
            })
            .catch((fetchError) => {
                setError({ error: fetchError.message, status: true });
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

    if (error.status) {
        return <Error />;
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
