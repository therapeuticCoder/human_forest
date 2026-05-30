import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("renders the Human Forest prototype", () => {
    render(<App />);

    expect(
      screen.getAllByText(/not everything matters the same/i),
    ).toHaveLength(2);
    expect(screen.getByText(/human forest/i)).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /signals/i })).toBeInTheDocument();
  });
});
