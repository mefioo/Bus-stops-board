import { renderWithRouter } from "@/tests/test-utils";
import MainView from "../MainView";
import { screen } from "@testing-library/react";

describe("MainView", () => {
  test("Displays proper header content for / path", () => {
    renderWithRouter(<MainView />, "/");
    expect(screen.getByText("Timetable")).toBeInTheDocument();
  });

  test("Displays proper header content for /stops path", () => {
    renderWithRouter(<MainView />, "/stops");
    expect(screen.getByText("Timetable")).toBeInTheDocument();
  });
});
