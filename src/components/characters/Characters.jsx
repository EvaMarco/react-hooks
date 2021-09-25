import React, { useContext } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../context/ThemeContext";
import CharTag from "./CharTag";

import "./characters.css";

const Characters = ({ characters, handleFavoriteCLick }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
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
    );
};

Characters.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleFavoriteCLick: PropTypes.func.isRequired,
};

export default Characters;
