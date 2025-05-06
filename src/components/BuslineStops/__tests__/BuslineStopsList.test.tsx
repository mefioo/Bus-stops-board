import { renderWithBusStopContext } from "@/tests/test-utils";
import BuslineStopsList from "../BuslineStopsList";
import { fireEvent, screen } from "@testing-library/react";

describe("BusStopsList", () => {
  test("Displays stops in ascending order by their order after clicking sort button", () => {
    renderWithBusStopContext(
      <BuslineStopsList
        selectedLine={10}
        selectedBusStops={[
          { stop: "Stop 3", line: 10, order: 2, time: "21:10" },
          { stop: "Stop 4", line: 10, order: 1, time: "21:10" },
          { stop: "Stop 5", line: 10, order: 3, time: "20:10" },
        ]}
        sortByOrder
      />
    );

    fireEvent.click(screen.getByTestId("arrow-down-icon"));
    const stopListItems = screen.getAllByRole("listitem");

    expect(stopListItems[0]).toHaveTextContent("Stop 4");
    expect(stopListItems[1]).toHaveTextContent("Stop 3");
    expect(stopListItems[2]).toHaveTextContent("Stop 5");
  });

  test("Displays stops in ascending order by their name after clicking sort button", () => {
    renderWithBusStopContext(
      <BuslineStopsList
        selectedLine={10}
        selectedBusStops={[
          { stop: "Stop 3", line: 10, order: 2, time: "21:10" },
          { stop: "Stop 4", line: 10, order: 1, time: "21:10" },
          { stop: "Stop 2", line: 10, order: 3, time: "20:10" },
        ]}
      />
    );

    fireEvent.click(screen.getByTestId("arrow-down-icon"));
    const descListItems = screen.getAllByRole("listitem");

    expect(descListItems[0]).toHaveTextContent("Stop 4");
    expect(descListItems[1]).toHaveTextContent("Stop 3");
    expect(descListItems[2]).toHaveTextContent("Stop 2");

    fireEvent.click(screen.getByTestId("arrow-down-icon"));
    const ascListItems = screen.getAllByRole("listitem");

    expect(ascListItems[0]).toHaveTextContent("Stop 2");
    expect(ascListItems[1]).toHaveTextContent("Stop 3");
    expect(ascListItems[2]).toHaveTextContent("Stop 4");
  });
});
