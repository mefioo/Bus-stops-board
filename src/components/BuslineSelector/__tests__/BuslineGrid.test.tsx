import { renderWithBusStopContext } from "@/tests/test-utils";
import BusLineGrid from "../BuslineGrid";
import { screen } from "@testing-library/react";

describe("BuslineGrid", () => {
  test("Displays line numbers properly", () => {
    renderWithBusStopContext(
      <BusLineGrid availableLines={[1, 2, 3]} onLineSelect={vi.fn()} />
    );

    expect(screen.getByText(1)).toBeInTheDocument();
    expect(screen.getByText(2)).toBeInTheDocument();
    expect(screen.getByText(3)).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });

  test("displays the line numbers in ascending order", () => {
    renderWithBusStopContext(
      <BusLineGrid availableLines={[4, 2, 3]} onLineSelect={vi.fn()} />
    );

    const buttons = screen.getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("2");
    expect(buttons[1]).toHaveTextContent("3");
    expect(buttons[2]).toHaveTextContent("4");
  });
});
