import React from "react";
import PropTypes from "prop-types";

import { statusMapping, genderMapping } from "../../utils/utils";

import "./charTag.css";

const CharTag = ({ character, darkMode, handleFavoriteCLick }) => (
    <div className={`charTag ${darkMode ? "darkMode" : ""}`}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <ul className="details-list">
            <li className="list-item">
                Gender: <span>{genderMapping[character.gender]}</span>
            </li>
            <li className="list-item">
                Species: <span>{character.species}</span>
            </li>
            <li className="list-item">
                Status: <span>{statusMapping[character.status]}</span>
            </li>
            <li className="list-item">
                Origin: <span>{character.origin.name}</span>
            </li>
        </ul>
        <button
            type="button"
            className={`charTag-btn ${darkMode ? "darkMode" : ""}`}
            onClick={() => handleFavoriteCLick(character)}
        >
            Add to Favorites
        </button>
    </div>
);

CharTag.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    character: PropTypes.object.isRequired,
    darkMode: PropTypes.bool.isRequired,
    handleFavoriteCLick: PropTypes.func.isRequired,
};

export default CharTag;
