import React, { useState } from "react";
import CharacterManager from "./widgets/CharacterManager";
import Header from "./components/header/Header";
import ThemeContext from "./context/ThemeContext";

import "./App.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            <div className="App">
                <Header />
                <CharacterManager />
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
