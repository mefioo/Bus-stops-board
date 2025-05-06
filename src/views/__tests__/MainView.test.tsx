import { renderWithRouter } from "@/tests/test-utils";
import MainView from "../MainView";
import { screen, waitFor } from "@testing-library/react";

describe("MainView", () => {
  test("Displays proper header content for / path", async () => {
    renderWithRouter(<MainView />, "/");

    await waitFor(() => {
      expect(screen.getByText("Timetable")).toBeInTheDocument();
    });
  });
  test("Displays proper header content for /stops path", async () => {
    renderWithRouter(<MainView />, "/stops");

    await waitFor(() => {
      expect(screen.getByText("Timetable")).toBeInTheDocument();
    });
  });
});
