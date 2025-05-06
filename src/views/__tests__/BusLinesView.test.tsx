import { renderWithBusStopContext } from "@/tests/test-utils";
import BusLinesView from "../BusLinesView";
import { fireEvent, screen } from "@testing-library/react";

describe("BusLinesView", () => {
  test("Removes placeholder after selecting the line", () => {
    renderWithBusStopContext(<BusLinesView />, {
      error: null,
      loading: false,
      stops: [{ stop: "Stop", line: 12, order: 1, time: "10:10" }],
    });

    expect(
      screen.getAllByText("Please select the bus line first")
    ).toHaveLength(2);

    fireEvent.click(screen.getByText(12));

    expect(
      screen.queryByText("Please select the bus line first")
    ).not.toBeInTheDocument();
  });

  test("Renders loading component when loading data", () => {
    renderWithBusStopContext(<BusLinesView />, {
      error: null,
      loading: true,
      stops: [{ stop: "Stop", line: 12, order: 1, time: "10:10" }],
    });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("Renders error component when error occurred", () => {
    renderWithBusStopContext(<BusLinesView />, {
      error: "error",
      loading: false,
      stops: [{ stop: "Stop", line: 12, order: 1, time: "10:10" }],
    });

    expect(
      screen.getByText("The error occurred. Please try refreshing the page.")
    ).toBeInTheDocument();
  });
});
