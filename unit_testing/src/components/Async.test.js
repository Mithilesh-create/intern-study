import { render, screen } from "@testing-library/react";
import Async from "./Async";

// describe("This is a Async test suite", () => {
//   test("renders list", async () => {
//     render(<Async />);
//     const linkElement = await screen.findAllByRole("listitem");
//     expect(linkElement).not.toHaveLength(0);
//   });
// });

describe("This is a Mock Async test suite", () => {
  test("renders Mock list", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          id: "1",
          title: "First",
        },
        {
          id: "2",
          title: "Second",
        },
      ],
    });
    render(<Async />);
    const linkElement = await screen.findAllByRole("listitem");
    expect(linkElement).not.toHaveLength(0);
  });
});
