import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByTestId("app");
  expect(linkElement).toBeInTheDocument();
});

test("rendering a component that uses useLocation", () => {
  const route = "/country/:name";
  render(<App />);

  expect(screen.getByTestId("app")).toHaveTextContent(route);
});
