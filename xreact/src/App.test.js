import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders xreact link", () => {
  render(<App />);
  const linkElement = screen.getByText(/xreact/i);
  expect(linkElement).toBeInTheDocument();
});
