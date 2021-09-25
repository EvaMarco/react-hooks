import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Header", () => {
    render(<App />);
    const headerText = screen.getByText(/Curso Profesional de React Hooks/i);
    expect(headerText).toBeInTheDocument();
});
