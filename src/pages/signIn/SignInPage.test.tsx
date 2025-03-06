import { fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { render } from "../../utils/CustomTestRender";
import SignInPage from "./SignInPage";

describe("SignIn Component", () => {
  it("renders 'This is sign in page'", () => {
    render(<SignInPage />);
    const textElement = screen.getByTestId("signin");
    expect(textElement).toBeInTheDocument();
  });

  it("renders image", () => {
    render(<SignInPage />);
    const image = screen.getByTestId("signin-image");
    expect(image).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<SignInPage />);
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
  });

  it("renders password input", () => {
    render(<SignInPage />);
    const passwordInput = screen.getByPlaceholderText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders sign in button", () => {
    render(<SignInPage />);
    const button = screen.getByText("Sign in");
    expect(button).toBeInTheDocument();
  });

  it("renders forgot password link", () => {
    render(<SignInPage />);
    const link = screen.getByText("Forgot password?");
    expect(link).toBeInTheDocument();
  });

  it("renders create account link", () => {
    render(<SignInPage />);
    const link = screen.getByText("Create one");
    expect(link).toBeInTheDocument();
  });

  it("toggle password visibility", () => {
    render(<SignInPage />);
    const passwordInput = screen.getByPlaceholderText("Password");
    const toggleButton = screen.getByTestId("toggle-password");

    expect(passwordInput).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
});
