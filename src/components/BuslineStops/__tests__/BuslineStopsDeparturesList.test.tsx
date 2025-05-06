import { renderWithBusStopContext } from "@/tests/test-utils";
import BuslineStopsDeparturesList from "../BuslineStopsDeparturesList";
import { screen } from "@testing-library/react";

describe("BuslineStopsDeparturesList", () => {
  test("Displays list in ascending order", () => {
    renderWithBusStopContext(
      <BuslineStopsDeparturesList
        selectedBusStopName="Stop name"
        selectedLineAndNameBusStops={[
          { order: 1, time: "22:20", stop: "StopName", line: 20 },
          { order: 1, time: "21:20", stop: "StopName", line: 20 },
          { order: 1, time: "23:20", stop: "StopName", line: 20 },
        ]}
      />
    );

    const stopListItems = screen.getAllByRole("listitem");

    expect(stopListItems[0]).toHaveTextContent("21:20");
    expect(stopListItems[1]).toHaveTextContent("22:20");
    expect(stopListItems[2]).toHaveTextContent("23:20");
  });
});
