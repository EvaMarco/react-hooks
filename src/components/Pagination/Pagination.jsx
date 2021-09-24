/* eslint-disable react/forbid-prop-types */
import React, { useCallback, useState, useContext } from "react";
import PropTypes from "prop-types";

import ThemeContext from "../../context/ThemeContext";
import "./pagination.css";

const Pagination = ({ baseUrl, fetchCharacters, info }) => {
    const { darkMode } = useContext(ThemeContext);
    const [actualPage, setActualPage] = useState(1);

    const goFirst = useCallback(() => {
        fetchCharacters(baseUrl);
        setActualPage(1);
    }, [baseUrl]);

    const prevChar = useCallback(() => {
        fetchCharacters(info.prev);
        const prevPage = actualPage - 1;
        setActualPage(prevPage);
    }, [info]);

    const nextChar = useCallback(() => {
        fetchCharacters(info.next);
        const nextPage = actualPage + 1;
        setActualPage(nextPage);
    }, [info]);

    const goLast = useCallback(() => {
        fetchCharacters(`${baseUrl}?page=${info.pages}`);
        setActualPage(info.pages);
    }, [baseUrl]);

    const goToPage = useCallback(
        (ev) => {
            const inputValue = ev.target.value;
            const page = inputValue >= info.pages ? info.pages : inputValue;
            fetchCharacters(`${baseUrl}?page=${page}`);
            setActualPage(page);
        },
        [baseUrl]
    );

    return (
        <div className={`paginationWrapper ${darkMode ? "darkMode" : ""}`}>
            <button
                className={`paginationBtn ${darkMode ? "darkMode" : ""}`}
                type="button"
                onClick={goFirst}
                disabled={info.prev === null ? "disabled" : ""}
            >
                First
            </button>
            <button
                className={`paginationBtn ${darkMode ? "darkMode" : ""}`}
                type="button"
                onClick={prevChar}
                disabled={info.prev === null ? "disabled" : ""}
            >
                Previous
            </button>
            <div className={`paginationInputWrapper ${darkMode ? "darkMode" : ""}`}>
                Page
                <input
                    className={`paginationInput ${darkMode ? "darkMode" : ""}`}
                    value={actualPage}
                    onChange={goToPage}
                    type="number"
                    min={1}
                    max={info.pages}
                    step={1}
                />
                of {info.pages} pages.
            </div>
            <button
                className={`paginationBtn ${darkMode ? "darkMode" : ""}`}
                type="button"
                onClick={nextChar}
                disabled={info.next === null ? "disabled" : ""}
            >
                Next
            </button>
            <button
                className={`paginationBtn ${darkMode ? "darkMode" : ""}`}
                type="button"
                onClick={goLast}
                disabled={info.next === null ? "disabled" : ""}
            >
                Last
            </button>
        </div>
    );
};

Pagination.propTypes = {
    baseUrl: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    fetchCharacters: PropTypes.func.isRequired,
};

export default Pagination;
