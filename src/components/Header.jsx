import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import HeaderBtn from "./HeaderBtn";
import "./header.css";

const Header = () => {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`header ${darkMode ? "darkMode" : ""}`}>
            <div className="title-wrapper">
                <h1 className="header--title">Curso Profesional de React Hooks</h1>
                <p className="header--subtitle">by Eva Marco</p>
            </div>
            <HeaderBtn />
        </div>
    );
};

export default Header;
