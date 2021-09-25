import React from "react";
import PropTypes from "prop-types";

const FavoriteChar = ({ favorite, removeFavoriteOnClick }) =>
    <li key={favorite.id}>
        <button type="button" onClick={() => removeFavoriteOnClick(favorite)}>
            {favorite.name}
        </button>
    </li>;

FavoriteChar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    favorite: PropTypes.object.isRequired,
    removeFavoriteOnClick: PropTypes.func.isRequired,
};

export default FavoriteChar;
