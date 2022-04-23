import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home";

test("render Button", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const ButtonElement = screen.getByRole("button");
  expect(ButtonElement).toBeInTheDocument();
});

test("check button is enabled", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const CheckButtonElement = screen.getByRole("button");
  expect(CheckButtonElement).toHaveAttribute("disabled");
});
