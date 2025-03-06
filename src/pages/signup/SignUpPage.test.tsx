import { fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SignUpPage from "./SignUpPage";
import { render } from "../../utils/CustomTestRender";

describe("SignUp Component", () => {
  it("renders 'This is sign in page'", () => {
    render(<SignUpPage />);
    const textElement = screen.getByTestId("signup");
    expect(textElement).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<SignUpPage />);
    const image = screen.getByTestId("signup-image");
    expect(image).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<SignUpPage />);
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders password input", () => {
    render(<SignUpPage />);
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders sign in button", () => {
    render(<SignUpPage />);
    const button = screen.getByText("Sign in");
    expect(button).toBeInTheDocument();
  });



  it("renders Sign in link", () => {
    render(<SignUpPage />);
    const link = screen.getByText("Sign in");
    expect(link).toBeInTheDocument();
  });

  it("toggle password visibility", () => {
    render(<SignUpPage />);
    const passwordInput = screen.getByPlaceholderText("Password");
    const toggleButton = screen.getByTestId("toggle-password");

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
