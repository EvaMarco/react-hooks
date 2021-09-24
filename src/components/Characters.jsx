import React, { useState, useEffect, useCallback, useContext, useReducer } from "react";
import ThemeContext from "../context/ThemeContext";

import CharTag from "./CharTag";

import "./characters.css";

const initialState = {
    favorites: [],
};

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case "REMOVE_FROM_FAVORITES": {
            const pastState = { ...state };
            const filtered = pastState.favorites.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                favorites: filtered,
            };
        }
        default:
            return state;
    }
};

const Characters = () => {
    const { darkMode } = useContext(ThemeContext);
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

    const [characters, setCharacters] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [error, setError] = useState(false);

    const fetchCharacters = (url) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
                setError(false);
                if (data.info.next) setNextUrl(data.info.next);
                if (data.info.prev) setPreviewUrl(data.info.prev);
            })
            .catch((fetchError) => {
                setError(true);
                console.error(fetchError);
            });
    };

    useEffect(() => {
        fetchCharacters("https://rickandmortyapi.com/api/character/");
    }, []);

    const prevChar = useCallback(() => {
        fetchCharacters(previewUrl);
    }, [previewUrl]);

    const nextChar = useCallback(() => {
        fetchCharacters(nextUrl);
    }, [nextUrl]);

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
            <div>
                <button
                    type="button"
                    onClick={prevChar}
                    disabled={previewUrl === "" ? "disabled" : ""}
                >
                    Previous
                </button>
                <button
                    type="button"
                    onClick={nextChar}
                    disabled={nextUrl === "" ? "disabled" : ""}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Characters;
