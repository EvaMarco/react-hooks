import React, { useContext } from "react";
import PropTypes from "prop-types";

import FavoriteChar from "./FavoriteChar";
import ThemeContext from "../../context/ThemeContext";

import "./favorite.css";

const FavoriteBar = ({ favorites, removeFavoriteOnClick }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <ul className={`favoriteBar ${darkMode ? "darkMode" : ""}`}>
            {favorites.favorites.map((favorite) => (
                <FavoriteChar
                    key={favorite.id}
                    favorite={favorite}
                    removeFavoriteOnClick={removeFavoriteOnClick}
                />
            ))}
        </ul>
    );
};

FavoriteBar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    favorites: PropTypes.object.isRequired,
    removeFavoriteOnClick: PropTypes.func.isRequired,
};

export default FavoriteBar;
