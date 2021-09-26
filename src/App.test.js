import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/header/Header";

test("renders Header", () => {
    const mockedUserDispatch = jest.fn();
    render(
        <ThemeContext.Provider value={{ darkMode: false, setDarkMode: mockedUserDispatch }}>
            <Header />
        </ThemeContext.Provider>
    );
    const headerText = screen.getByText(/Curso Profesional de React Hooks/i);
    expect(headerText).toBeInTheDocument();
});

test("Find button and change to dark Mode", () => {
    const mockedUserDispatch = jest.fn();
    render(
        <ThemeContext.Provider value={{ darkMode: false, setDarkMode: mockedUserDispatch }}>
            <Header />
        </ThemeContext.Provider>
    );
    const headerBtn = screen.getByRole("switch");
    expect(headerBtn).not.toBeDisabled();
    fireEvent.click(headerBtn);
    expect(mockedUserDispatch).toHaveBeenCalled();
});
