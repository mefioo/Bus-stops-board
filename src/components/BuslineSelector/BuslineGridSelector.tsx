import React, { FC, useContext } from "react";
import { BusStopsContext } from "../Timetable/BusStopsContext";
import Loading from "../Common/Loading";
import GenericError from "../Common/GenericError";
import BusLineGrid from "./BuslineGrid";
import { SelectedLineType } from "@/types";

interface PropTypes {
  onLineSelect: (line: number) => void;
  selectedLine: SelectedLineType;
}

const BuslineGridSelector: FC<PropTypes> = ({ onLineSelect, selectedLine }) => {
  const { error, loading, stops } = useContext(BusStopsContext);

  const lines = [...new Set(stops.map((s) => s.line)).values()];

  return (
    <div className="px-3 card">
      <h3 className="font-14 fw-semibold mt-4">Select Bus Line</h3>
      {loading && <Loading />}
      {error && <GenericError />}
      {!error && (
        <BusLineGrid
          availableLines={lines}
          selectedLine={selectedLine}
          onLineSelect={onLineSelect}
        />
      )}
    </div>
  );
};

export default BuslineGridSelector;
