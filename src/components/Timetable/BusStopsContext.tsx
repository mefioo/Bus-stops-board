import { StopType } from "@/types";
import { createContext } from "react";

interface BusStopContextType {
  error: string | null,
  loading: boolean,
  stops: StopType[],
}

export const BusStopsContext = createContext<BusStopContextType | Record<string, never>>({});