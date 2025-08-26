import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import * as ReactRouter from "react-router";
import LandingPage from "../LandingPage";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("LandingPage", () => {
  it("renders hero section with headline", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(
      screen.getByText(/Collect and manage feedback that actually/i)
    ).toBeInTheDocument();
  });

  it("renders call-to-action buttons", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/^Start Free$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Login$/i)).toBeInTheDocument();
  });

  it("navigates to signup when clicking Start Free", () => {
    const navigateMock = vi.fn();
    vi.mocked(ReactRouter.useNavigate).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/^Start Free$/i));
    expect(navigateMock).toHaveBeenCalledWith("auth/signup");
  });

  it("navigates to login when clicking Login", () => {
    const navigateMock = vi.fn();
    vi.mocked(ReactRouter.useNavigate).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText(/^Login$/i));
    expect(navigateMock).toHaveBeenCalledWith("auth/login");
  });

  it("renders pricing section with Free and Pro plans", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Pro")).toBeInTheDocument();
  });

  it("renders testimonials section with user names", () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );

    expect(screen.getByText("Alex Chen")).toBeInTheDocument();
    expect(screen.getByText("Sarah Johnson")).toBeInTheDocument();
    expect(screen.getByText("Michael Torres")).toBeInTheDocument();
  });
});
