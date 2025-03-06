import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import HowToUsePage from "./HowToUsePage";

describe("HowToUsePage Component", () => {
  it("renders 'This is how to use'", () => {
    render(<HowToUsePage />);
    const textElement = screen.getByText("This is the HowToUsePage");
    expect(textElement).toBeInTheDocument();
  });
});
