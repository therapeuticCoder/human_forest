import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("renders Timeline as a standalone default view", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /timeline/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /curator/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("region", { name: /timeline view/i }));
    expect(
      screen.getByText(/not everything matters the same/i),
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

  it("switches from Timeline to the Curator placeholder", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /curator/i }));

    expect(screen.getByRole("region", { name: /curator view/i }));
    expect(
      screen.getByText(/the full curator view will organize party/i),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("region", { name: /timeline view/i }),
    ).not.toBeInTheDocument();
  });
});
