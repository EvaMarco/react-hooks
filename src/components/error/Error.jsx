import React, { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

import "./error.css";

const Error = () => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className={`errorWrapper ${darkMode ? "darkMode" : ""}`}>
            <p className="errorText">
                There has been an error loading the request information, please ask your
                administrator.
            </p>
        </div>
    );
};

export default Error;
