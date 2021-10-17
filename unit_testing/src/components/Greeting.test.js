import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting.jsx";
describe("Greet", () => {
  test("renders unit test", () => {
    render(<Greeting />);
    const linkElement = screen.getByText("This will not render on click", {
      exact: false,
    });
    expect(linkElement).toBeInTheDocument();
  });
  test("render Click event", () => {
    render(<Greeting />);

    const linkElement = screen.getByRole("button");
    userEvent.click(linkElement);
    const linkElementTwo = screen.getByText("Changed", { exact: false });
    expect(linkElementTwo).toBeInTheDocument();
  });
  test("render after Click event", () => {
    render(<Greeting />);

    const linkElement = screen.getByRole("button");
    userEvent.click(linkElement);
    const linkElementTwo = screen.queryByText("This will not render on click", {
      exact: false,
    });
    expect(linkElementTwo).toBeNull();
  });
});
