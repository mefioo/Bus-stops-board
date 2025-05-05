import React, { useState } from "react";
import BuslineGridSelector from "@/components/BuslineSelector/BuslineGridSelector";
import BuslineSelectedContent from "@/components/BuslineSelector/BuslineSelectedContent";

const BusLinesView = () => {
  const [selectedLine, setSelectedLine] = useState<number | null>(null);

  const lineSelectHandler = (lineNumber: number) => {
    setSelectedLine(lineNumber);
  };

  return (
    <div className="d-flex flex-column gap-3">
      <BuslineGridSelector
        onLineSelect={lineSelectHandler}
        selectedLine={selectedLine}
      />
      <BuslineSelectedContent
        selectedLine={selectedLine}
      />
    </div>
  );
};

export default BusLinesView;
