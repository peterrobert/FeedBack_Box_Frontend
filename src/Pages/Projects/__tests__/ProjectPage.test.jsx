import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProjectPage from "../ProjectPage";

// Mock child components that aren't the focus of this test
vi.mock("../Card", () => ({
  default: () => <div data-testid="card">Mock Card</div>,
}));

vi.mock("../../../Components/AppFooter", () => ({
  default: () => <footer data-testid="footer">Mock Footer</footer>,
}));

describe("ProjectPage", () => {
  it("renders the page header with title and description", () => {
    render(<ProjectPage />);
    expect(
      screen.getByRole("heading", { name: /my projects/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/manage your feedback projects/i)
    ).toBeInTheDocument();
  });

  it("renders the Project button", () => {
    render(<ProjectPage />);
    expect(
      screen.getByRole("button", { name: /project/i })
    ).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<ProjectPage />);
    const input = screen.getByPlaceholderText(/search projects/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders sorting dropdown with options", () => {
    render(<ProjectPage />);
    expect(screen.getByText(/sort: newest/i)).toBeInTheDocument();
    expect(screen.getByText(/sort: most feedback/i)).toBeInTheDocument();
    expect(screen.getByText(/sort: alphabetical/i)).toBeInTheDocument();
  });

  it("renders type filter dropdown", () => {
    render(<ProjectPage />);
    expect(screen.getByText(/all types/i)).toBeInTheDocument();
    expect(screen.getByText(/mvp/i)).toBeInTheDocument();
    expect(screen.getByText(/design/i)).toBeInTheDocument();
  });

  it("renders multiple project cards", () => {
    render(<ProjectPage />);
    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(4);
  });

  it("renders the footer", () => {
    render(<ProjectPage />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
