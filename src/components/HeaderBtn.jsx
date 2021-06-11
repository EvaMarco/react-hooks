import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';

import './headerBtn.css';

const HeaderBtn = ({handleClick, darkMode}) => {
    return (
        <button
            className={`headerBtn ${darkMode? "darkMode" : ""}`}
            type="button"
            role="switch"
            aria-checked="true"
            onClick={handleClick}
            title={darkMode? "Go light" :  "Go Dark" }
        >
            {darkMode ? <FontAwesomeIcon icon={faToggleOff}/> : <FontAwesomeIcon icon={faToggleOn}/>}
        </button>
    )
}

export default HeaderBtn
