import React from "react";
import PropTypes from "prop-types";

import FavoriteChar from "./FavoriteChar";


const FavoriteBar = ({ favorites, removeFavoriteOnClick }) => {
    return (
        <ul>
            {favorites.favorites.map((favorite) => (
                <FavoriteChar favorite={favorite} removeFavoriteOnClick={removeFavoriteOnClick}/>
            ))}
        </ul>
    );
};

FavoriteBar.propTypes = {
    favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeFavoriteOnClick: PropTypes.func.isRequired,
};

export default FavoriteBar;
