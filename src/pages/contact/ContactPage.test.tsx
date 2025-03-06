import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import ContactPage from "./ContactPage";

describe("ContactPage Component", () => {
  it("renders 'this is contact page'", () => {
    render(<ContactPage />);
    const textElement = screen.getByText("This is the ContactPage");
    expect(textElement).toBeInTheDocument();
  });
});
