import React, { useState, useEffect } from 'react'

import CharTag from './CharTag';

import './characters.css';

export const Characters = ({darkMode}) => {

    const [characters, setCharacters] = useState([]);
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
    if(error){
        return(
            <div>Error</div>
        )
    }
    return (
            <div className={`characters ${darkMode? "darkMode" : ""}`}>
                {characters.map(character =>
                    <CharTag key={character.id} character={character} darkMode={darkMode}/>
                )}
            </div>
    )
}

export default Characters;
