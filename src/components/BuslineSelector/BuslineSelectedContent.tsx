import React, { FC, useContext, useEffect, useState } from "react";
import BuslineStopsList from "../BuslineStops/BuslineStopsList";
import BuslineStopsDeparturesList from "../BuslineStops/BuslineStopsDeparturesList";
import { SelectedLineType } from "@/types";
import CardPlaceholder from "../Common/CardPlaceholder";
import { BusStopsContext } from "../Timetable/BusStopsContext";
import {
  noBusLineSelectedPlaceholderText,
  noBusStopSelectedPlaceholderText,
} from "@/constants/placeholders";

interface PropTypes {
  selectedLine?: SelectedLineType;
}

const BuslineSelectedContent: FC<PropTypes> = ({ selectedLine }) => {
  const { stops } = useContext(BusStopsContext);

  const [selectedBusStopName, setSelectedBusStopName] = useState<string | null>(
    null
  );

  useEffect(() => {
    setSelectedBusStopName(null);
  }, [selectedLine]);

  const placeholderText = selectedLine
    ? noBusStopSelectedPlaceholderText
    : noBusLineSelectedPlaceholderText;

  const selectBusStopHandler = (busStop: string) => {
    setSelectedBusStopName(busStop);
  };

  const selectedLineBusStops = stops.filter(
    (stop) => stop.line === selectedLine
  );

  return (
    <div className="d-flex flex-row gap-3 busline-selected-content">
      {selectedLine ? (
        <BuslineStopsList
          maxHeight={322}
          onBusStopSelect={selectBusStopHandler}
          selectedBusStopName={selectedBusStopName}
          selectedBusStops={selectedLineBusStops}
          selectedLine={selectedLine}
          sortByOrder
        />
      ) : (
        <CardPlaceholder text={noBusLineSelectedPlaceholderText} />
      )}
      {selectedBusStopName ? (
        <BuslineStopsDeparturesList
          selectedBusStopName={selectedBusStopName}
          selectedLineAndNameBusStops={selectedLineBusStops.filter(
            (stop) => stop.stop === selectedBusStopName
          )}
        />
      ) : (
        <CardPlaceholder text={placeholderText} />
      )}
    </div>
  );
};

export default BuslineSelectedContent;
