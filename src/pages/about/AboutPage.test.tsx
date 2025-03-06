import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import AboutPage from "./AboutPage";

describe("AboutPage Component", () => {
  it("renders 'this is the AboutPage'", () => {
    render(<AboutPage />);
    const textElement = screen.getByText("This is the AboutPage");
    expect(textElement).toBeInTheDocument();
  });
});
