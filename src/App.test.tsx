import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("Displays proper header content", async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("Timetable")).toBeInTheDocument();
    });
  });
});
