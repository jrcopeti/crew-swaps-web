// ThemeToggle.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider } from "../context/ThemeContext";

describe("ThemeToggle Component", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute("data-theme");
  });

  it("renders correctly", () => {
    render(<ThemeToggle />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("toggles theme", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    const checkbox = screen.getByRole("checkbox");
    const initialTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "darkcrew"
      : "lightcrew";
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      initialTheme,
    );

    fireEvent.click(checkbox);
    const toggledTheme = initialTheme === "darkcrew" ? "lightcrew" : "darkcrew";
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      toggledTheme,
    );

    expect(localStorage.getItem("theme")).toContain(toggledTheme);

    fireEvent.click(checkbox);
    expect(document.documentElement).toHaveAttribute(
      "data-theme",
      initialTheme,
    );
    expect(localStorage.getItem("theme")).toContain(initialTheme);
  });
});
