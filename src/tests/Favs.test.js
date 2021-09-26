import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ThemeContext from "../context/ThemeContext";
import FavoriteBar from "../components/FavoriteBar/FavoriteBar";

const mockFavorites = {
    favorites: [
        {
            id: 1,
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Sanchez",
        },
        {
            id: 2,
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            name: "Morty Smith",
        },
        {
            id: 4,
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            name: "Beth Smith",
        },
    ],
};

test("Render favorite bar with 3 favs", () => {
    render(
        <ThemeContext.Provider value={{ darkMode: false, setDarkMode: () => {} }}>
            <FavoriteBar favorites={mockFavorites} removeFavoriteOnClick={() => {}} />
        </ThemeContext.Provider>
    );
    const favs = screen.getAllByRole("button");
    expect(favs).toHaveLength(3);
});

test("Remove one fav when we click in one of them", () => {
    const mockedUserDispatch = jest.fn();
    render(
        <ThemeContext.Provider value={{ darkMode: false, setDarkMode: () => {} }}>
            <FavoriteBar favorites={mockFavorites} removeFavoriteOnClick={mockedUserDispatch} />
        </ThemeContext.Provider>
    );
    const favs = screen.getAllByRole("button");
    expect(favs).toHaveLength(3);
    fireEvent.click(favs[0]);
    expect(mockedUserDispatch).toHaveBeenCalled();
});
