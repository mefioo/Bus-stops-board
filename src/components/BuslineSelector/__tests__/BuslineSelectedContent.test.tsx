import { renderWithBusStopContext } from "@/tests/test-utils";
import BuslineSelectedContent from "../BuslineSelectedContent";
import { fireEvent, screen } from "@testing-library/react";

describe("BuslineSelectedContent", () => {
  test("Displays two placeholders when no selected line", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={null} />);

    expect(
      screen.getAllByText("Please select the bus line first")
    ).toHaveLength(2);
  });

  test("Displays no select line placeholders after selecting the line", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={1} />);

    expect(
      screen.queryByText("Please select the bus line first")
    ).not.toBeInTheDocument();
  });

  test("Displays select stop placeholder after selecting the line", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={1} />);

    expect(
      screen.getAllByText("Please select the bus stop first")
    ).toHaveLength(1);
  });

  test("Displays stops list when line is selected", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={10} />, {
      error: null,
      loading: false,
      stops: [
        { stop: "Stop", line: 12, order: 1, time: "10:10" },
        { stop: "Stop 3", line: 10, order: 4, time: "21:10" },
        { stop: "Stop 2", line: 10, order: 1, time: "20:10" },
        { stop: "Stop 4", line: 1, order: 4, time: "21:10" },
      ],
    });

    expect(screen.getByText("Bus Line: 10")).toBeInTheDocument();
    expect(screen.getByText("Bus Stops")).toBeInTheDocument();
    expect(screen.getByText("Stop 2")).toBeInTheDocument();
    expect(screen.getByText("Stop 3")).toBeInTheDocument();
    expect(screen.queryByText("Stop")).not.toBeInTheDocument();
    expect(screen.queryByText("Stop 4")).not.toBeInTheDocument();
  });

  test("Displays stops in ascending order by default", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={10} />, {
      error: null,
      loading: false,
      stops: [
        { stop: "Stop", line: 12, order: 1, time: "10:10" },
        { stop: "Stop 3", line: 10, order: 4, time: "21:10" },
        { stop: "Stop 4", line: 10, order: 3, time: "21:10" },
        { stop: "Stop 2", line: 10, order: 1, time: "20:10" },
      ],
    });

    const stopListItems = screen.getAllByRole("listitem");

    expect(stopListItems[0]).toHaveTextContent("Stop 2");
    expect(stopListItems[1]).toHaveTextContent("Stop 3");
    expect(stopListItems[2]).toHaveTextContent("Stop 4");
  });

  test("Hides placeholder when line and stop are selected", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={10} />, {
      error: null,
      loading: false,
      stops: [{ stop: "Stop 3", line: 10, order: 2, time: "21:10" }],
    });

    expect(
      screen.getByText("Please select the bus stop first")
    ).toBeInTheDocument();

    fireEvent.click(screen.getByText("Stop 3"));

    expect(
      screen.queryByText("Please select the bus stop first")
    ).not.toBeInTheDocument();
  });

  test("Displays time list", () => {
    renderWithBusStopContext(<BuslineSelectedContent selectedLine={10} />, {
      error: null,
      loading: false,
      stops: [
        { stop: "Stop 3", line: 10, order: 3, time: "21:10" },
        { stop: "Stop 3", line: 10, order: 3, time: "22:10" },
        { stop: "Stop 3", line: 10, order: 3, time: "22:13" },
      ],
    });

    fireEvent.click(screen.getByText("Stop 3"));

    expect(screen.getByText("21:10")).toBeInTheDocument();
    expect(screen.getByText("22:10")).toBeInTheDocument();
    expect(screen.getByText("22:13")).toBeInTheDocument();
  });
});
