import {
  SelectedBusStopType,
  SelectedLineType,
  StopSortFunctionType,
  StopType,
} from "@/types";
import React, { FC, useEffect, useState } from "react";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import List from "../Common/List";
import { getStopSortFunctionByType } from "@/helpers/busStops";

interface PropTypes {
  onBusStopSelect: (stop: string) => void;
  selectedBusStop: SelectedBusStopType;
  selectedLineBusStops: StopType[];
  selectedLine: SelectedLineType;
}

const BuslineStopsList: FC<PropTypes> = ({
  onBusStopSelect,
  selectedBusStop,
  selectedLineBusStops,
  selectedLine,
}) => {
  const [sortType, setSortType] = useState<StopSortFunctionType>(
    StopSortFunctionType.default
  );

  useEffect(() => {
    setSortType(StopSortFunctionType.default);
  }, [selectedLine]);

  const busStopNames = [
    ...new Set(
      selectedLineBusStops
        .toSorted(getStopSortFunctionByType(sortType))
        .map((stop) => stop.stop)
    ).values(),
  ];

  const arrowClickHandler = () => {
    setSortType((prev) =>
      prev === StopSortFunctionType.orderAsc
        ? StopSortFunctionType.orderDesc
        : StopSortFunctionType.orderAsc
    );
  };

  return (
    <div className="card w-100">
      {selectedLine && (
        <h6 className="px-4 pt-4 pb-1 lh-base">Bus Line: {selectedLine}</h6>
      )}
      <div>
        <div className="d-flex flex-row gap-1 align-items-center px-4 border-bottom py-4">
          <span className="fw-semibold font-12 lh-sm">Bus Stops</span>
          <ArrowDownIcon onClick={arrowClickHandler} />
        </div>
        <List
          activeItem={selectedBusStop}
          maxHeight={322}
          items={busStopNames}
          itemClassName="px-4 py-3"
          onItemClick={onBusStopSelect}
        />
      </div>
    </div>
  );
};

export default BuslineStopsList;
