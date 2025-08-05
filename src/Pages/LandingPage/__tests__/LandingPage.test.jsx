import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "@jest/globals";
import LandingPage from "../LandingPage";

describe("Landing Page", () => {
  it("shows the main heading", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const heading = screen.getByText(
      /Collect and manage feedback that actually/i
    );
    expect(heading).toBeInTheDocument();
  });

  it("has a Start Free button", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const button = screen.getByText(/Start Free/i);
    expect(button).toBeInTheDocument();
  });
});
