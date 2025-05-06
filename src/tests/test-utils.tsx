import { BusStopsContext } from "@/components/Timetable/BusStopsContext";
import { BusStopContextValueType } from "@/types";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (ui: ReactNode, initialEntry: string = "/") => {
  return render(<MemoryRouter initialEntries={[initialEntry]}>{ui}</MemoryRouter>);
};

export const renderWithBusStopContext = (
  ui: ReactNode,
  value: BusStopContextValueType = { error: null, loading: false, stops: [] }
) => {
  return renderWithRouter(
    <BusStopsContext.Provider value={value}>{ui}</BusStopsContext.Provider>
  );
};
