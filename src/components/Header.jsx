import React from "react";
import HeaderBtn from "./HeaderBtn";
import './header.css';

const Header = ({handleClick, darkMode}) => {

    return (
        <div className={`header ${darkMode? "darkMode" : ""}`}>
            <div className="title-wrapper">
                <h1 className="header--title">Curso Profesional de React Hooks</h1>
                <p className="header--subtitle">by Eva Marco</p>
            </div>
            <HeaderBtn handleClick={ handleClick} darkMode={darkMode}/>
        </div>
    );
};

export default Header;
