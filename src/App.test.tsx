import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Displays proper header content", () => {
    render(<App />);
    expect(screen.getByText("Timetable")).toBeInTheDocument();
  });
});
