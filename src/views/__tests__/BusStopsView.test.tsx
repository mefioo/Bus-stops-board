import { renderWithBusStopContext } from "@/tests/test-utils";
import BusStopsView from "../BusStopsView";
import { fireEvent, screen } from "@testing-library/react";

describe("BusStopsView", () => {
  test("Renders all stops when search input is empty", () => {
    renderWithBusStopContext(<BusStopsView />, {
      error: null,
      loading: false,
      stops: [
        { order: 1, time: "7:29", stop: "Stop 1", line: 10 },
        { order: 1, time: "7:29", stop: "Stop 2", line: 10 },
        { order: 1, time: "7:29", stop: "Stop 17", line: 10 },
      ],
    });

    expect(screen.getByText("Stop 1")).toBeInTheDocument();
    expect(screen.getByText("Stop 2")).toBeInTheDocument();
    expect(screen.getByText("Stop 17")).toBeInTheDocument();
  });

  test("Renders all stops in ascending order", () => {
    renderWithBusStopContext(<BusStopsView />, {
      error: null,
      loading: false,
      stops: [
        { order: 1, time: "7:29", stop: "Stop 1", line: 10 },
        { order: 1, time: "7:29", stop: "Another stop", line: 10 },
        { order: 1, time: "7:29", stop: "Different stop", line: 10 },
        { order: 1, time: "7:29", stop: "Stop 2", line: 10 },
      ],
    });

    const listItems = screen.getAllByRole("listitem");

    expect(listItems[0]).toHaveTextContent("Another stop");
    expect(listItems[1]).toHaveTextContent("Different stop");
    expect(listItems[2]).toHaveTextContent("Stop 1");
    expect(listItems[3]).toHaveTextContent("Stop 2");
  });

  test("Renders filtered stops after search input change", () => {
    renderWithBusStopContext(<BusStopsView />, {
      error: null,
      loading: false,
      stops: [
        { order: 1, time: "7:29", stop: "Stop 1", line: 10 },
        { order: 1, time: "7:29", stop: "Another stop", line: 10 },
        { order: 1, time: "7:29", stop: "Different stop", line: 10 },
        { order: 1, time: "7:29", stop: "Stop 2", line: 10 },
      ],
    });

    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(4);
    expect(listItems[0]).toHaveTextContent("Another stop");
    expect(listItems[1]).toHaveTextContent("Different stop");
    expect(listItems[2]).toHaveTextContent("Stop 1");
    expect(listItems[3]).toHaveTextContent("Stop 2");

    fireEvent.change(document.getElementById("search") as Element, {
      target: { value: "Stop" },
    });

    const filteredListItems = screen.getAllByRole("listitem");

    expect(filteredListItems).toHaveLength(2);
    expect(filteredListItems[0]).toHaveTextContent("Stop 1");
    expect(filteredListItems[1]).toHaveTextContent("Stop 2");
  });
});
