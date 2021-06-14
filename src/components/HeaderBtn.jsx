import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../context/ThemeContext';

import './headerBtn.css';

const HeaderBtn = () => {
    const {darkMode, setDarkMode} = useContext(ThemeContext);
    const handleClick = () => {
        setDarkMode(!darkMode);
    }
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
