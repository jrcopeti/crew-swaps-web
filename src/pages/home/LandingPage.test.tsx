import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import LandingPage from "./LandingPage";
import { BrowserRouter } from "react-router";

describe("LandingPage Component", () => {
  it("renders title text ", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>,
    );
    const textElement = screen.getByTestId("landing-page");
    expect(textElement).toBeInTheDocument();
  });
});
