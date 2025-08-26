import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "../Card";
import { MemoryRouter } from "react-router-dom";

describe("Card component", () => {
  it("renders the headline", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(screen.getByText("Landing Page MVP")).toBeInTheDocument();
  });

  it("renders the status badge", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(screen.getByText("MVP")).toBeInTheDocument();
  });

  it("renders the description text", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Collecting feedback on our new landing page design/i)
    ).toBeInTheDocument();
  });

  it("shows the feedback count", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(screen.getByText("12 feedback received")).toBeInTheDocument();
  });

  it("displays the project link", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(
      screen.getByText("feedbackbox.io/p/landing-page-mvp")
    ).toBeInTheDocument();
  });

  it("renders the copy link button", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(screen.getByTitle("Copy link")).toBeInTheDocument();
  });

  it("renders the action buttons", () => {
    render(
      <MemoryRouter>
        <Card />
      </MemoryRouter>
    );
    expect(screen.getByRole("button", { name: /View/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Edit/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Delete/i })).toBeInTheDocument();
  });
});
