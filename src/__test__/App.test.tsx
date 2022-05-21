import { render, screen } from "@testing-library/react";
import App, { LocationDisplay } from "../App";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test("rendering a component that uses useLocation", () => {
  const history = createMemoryHistory();
  const route = "/country/:name";
  history.push(route);
  render(
    <Router location={history.location} navigator={history}>
      <LocationDisplay />
    </Router>
  );

  expect(screen.getByTestId("location-display")).toHaveTextContent(route);
});
