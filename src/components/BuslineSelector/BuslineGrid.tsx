import { SelectedLineType } from "@/types";
import React from "react";

interface PropTypes {
  availableLines: number[];
  selectedLine: SelectedLineType;
  onLineSelect: (line: number) => void;
}

const BusLineGrid = ({
  availableLines,
  selectedLine,
  onLineSelect,
}: PropTypes) => {
  const sortedLines = availableLines.toSorted((a, b) => a - b);

  return (
    <div className="d-flex flex-row gap-2 py-3 flex-wrap">
      {sortedLines.map((line) => {
        return (
          <button
            type="button"
            key={line}
            className={`btn btn-primary px-3 py-2 bus-line-button ${
              selectedLine === line ? "active" : ""
            }`}
            onClick={() => onLineSelect(line)}
          >
            {line}
          </button>
        );
      })}
    </div>
  );
};

export default BusLineGrid;
