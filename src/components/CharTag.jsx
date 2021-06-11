import React from 'react';

import statusMapping from "../utils/utils";

import './charTag.css';


const CharTag = ({character, darkMode}) => {
    return (
        <div className={`charTag ${darkMode? "darkMode" : ""}`}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <div>
                <ul>
                    <li >
                        Gender: {character.gender}
                    </li>
                    <li>
                        Species: {character.species}
                    </li>
                    <li >
                        Status: {character.status}
                    </li>
                    <li>
                        Origin: {character.origin.name}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CharTag;
