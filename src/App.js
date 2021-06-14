import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';
import React, { useState } from 'react';
import ThemeContext from "./context/ThemeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value ={{darkMode, setDarkMode}}>
      <div className="App">
        <Header />
        <Characters />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
