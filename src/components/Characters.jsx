import React, { useState, useEffect, useCallback, useContext, useReducer } from 'react';
import ThemeContext from "../context/ThemeContext";

import CharTag from './CharTag';

import './characters.css';

export const Characters = () => {
    const {darkMode} = useContext(ThemeContext);

    const [characters, setCharacters] = useState([]);
    const [nextUrl, setNextUrl] = useState("");
    const [previewUrl, setPreviewUrl] = useState("");
    const [error, setError] = useState(false);

    const fetchCharacters = (url) =>{
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results); setError(false);
                if(data.info.next) setNextUrl(data.info.next);
                if(data.info.prev) setPreviewUrl(data.info.prev);
            })
            .catch(error =>  setError(true));
    }

    useEffect(()=>{
        fetchCharacters("https://rickandmortyapi.com/api/character/");
    }, []);

    const prevChar = useCallback(()=>{
        fetchCharacters(previewUrl);
    }, [previewUrl]);

    const nextChar = useCallback(()=>{
        fetchCharacters(nextUrl);
    }, [nextUrl]);

    if(error){
        return(
            <div>Error</div>
        )
    }
    return (
        <>
            <div className={`characters ${darkMode? "darkMode" : ""}`}>
                {characters.map(character =>
                    <CharTag key={character.id} character={character} darkMode={darkMode}/>
                )}
            </div>
            <div>
                <button onClick={prevChar} disabled={previewUrl===""? "disabled": ""}>Previous</button>
                <button onClick={nextChar} disabled={nextUrl===""? "disabled": ""}>Next</button>
            </div>
        </>
    )
}

export default Characters;
