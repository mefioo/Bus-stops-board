import React, { FC, useState } from "react";
import BuslineStopsList from "../BuslineStops/BuslineStopsList";
import BuslineStopsDeparturesList from "../BuslineStops/BuslineStopsDeparturesList";
import { SelectedLineType } from "@/types";
import CardPlaceholder from "../Common/CardPlaceholder";

interface PropTypes {
  selectedLine: SelectedLineType;
}

const BuslineSelectedContent: FC<PropTypes> = ({ selectedLine }) => {
  const [selectedBusStop, setSelectedBusStop] = useState<string | null>(null);

  const placeholderText = selectedLine
    ? "Please select the bus stop first"
    : "Please select the bus line first";

  return (
    <div className="d-flex flex-row gap-3 busline-selected-content">
      {selectedLine ? (
        <BuslineStopsList selectedLine={selectedLine} />
      ) : (
        <CardPlaceholder text="Please select the bus line first" />
      )}
      {selectedBusStop ? (
        <BuslineStopsDeparturesList />
      ) : (
        <CardPlaceholder text={placeholderText} />
      )}
    </div>
  );
};

export default BuslineSelectedContent;
