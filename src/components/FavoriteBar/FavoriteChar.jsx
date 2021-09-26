import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./favorite.css";

const FavoriteChar = ({ favorite, removeFavoriteOnClick }) => {
    return (
        <li className="favoriteChar" title={`${favorite.name}. Click to remove from favorites.`}>
            <button
                className="favoriteBtn"
                type="button"
                onClick={() => removeFavoriteOnClick(favorite)}
            >
                <img className="favoriteImage" src={favorite.image} alt={favorite.name} />
                <FontAwesomeIcon icon={faTimes} className="closeIcon" />
            </button>
        </li>
    );
};

FavoriteChar.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    favorite: PropTypes.object,
    removeFavoriteOnClick: PropTypes.func.isRequired,
};
FavoriteChar.defaultProps = {
    favorite: {},
};

export default FavoriteChar;
