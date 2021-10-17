import { render, screen } from "@testing-library/react";
import App from "./App";

describe("This is a test suite", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("renders unit test", () => {
    render(<App />);
    const linkElement = screen.getByText("Hello World");
    expect(linkElement).toBeInTheDocument();
  });
});
