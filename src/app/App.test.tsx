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
    expect(screen.getAllByRole("button", { name: /signals/i })).toHaveLength(1);
    expect(
      screen.getByRole("button", { name: /timeline/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /field map/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/jordan from work/i)).toBeInTheDocument();
    expect(
      screen.getByText(/lan party this weekend if you're interested/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/haven't seen you since your mother's birthday party/i),
    ).toBeInTheDocument();
  });
});
