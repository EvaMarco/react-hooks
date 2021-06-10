import React, { useState, useEffect } from 'react'

export const Characters = () => {

    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        fetch("https://rickandmortyapi.com/api/character/")
            .then(response => response.json())
            .then(data => {setCharacters(data.results); setError(false);})
            .catch(error =>  setError(true));
    }, []);
    if(error){
        return(
            <div>Error</div>
        )
    }
    return (
        <div className="Characters">
            {characters.map(character =>
                <h2 key={character.id}>{character.name}</h2>
            )}
        </div>
    )
}

export default Characters;
