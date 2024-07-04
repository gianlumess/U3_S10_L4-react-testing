import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import Welcome from "../components/Welcome";

describe("mounts of Welcome component", () => {
  it("mounts Alert correctly", () => {
    render(<Welcome />);
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
  });
});
