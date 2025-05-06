import {
  SelectedBusStopType,
  SelectedLineType,
  StopSortFunctionType,
  StopType,
} from "@/types";
import React, { FC, useEffect, useState } from "react";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import List from "../Common/List";
import {
  getSortTypeByName,
  getSortTypeByOrder,
  getStopSortFunctionByType,
} from "@/helpers/busStops";

interface PropTypes {
  maxHeight?: number;
  onBusStopSelect?: (stop: string) => void;
  selectedBusStopName?: SelectedBusStopType;
  selectedBusStops: StopType[];
  selectedLine?: SelectedLineType;
  sortByOrder?: boolean;
}

const BuslineStopsList: FC<PropTypes> = ({
  maxHeight,
  onBusStopSelect,
  selectedBusStopName,
  selectedBusStops,
  selectedLine,
  sortByOrder,
}) => {
  const [sortType, setSortType] = useState<StopSortFunctionType>(
    StopSortFunctionType.nameAsc
  );

  useEffect(() => {
    setSortType(StopSortFunctionType.nameAsc);
  }, [selectedLine]);

  const busStopNames = [
    ...new Set(
      [...selectedBusStops]
        .sort(getStopSortFunctionByType(sortType))
        .map((stop) => stop.stop)
    ).values(),
  ];

  const arrowClickHandler = () => {
    setSortType((prev) =>
      sortByOrder ? getSortTypeByOrder(prev) : getSortTypeByName(prev)
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
          activeItem={selectedBusStopName}
          maxHeight={maxHeight}
          items={busStopNames}
          itemClassName="px-4 py-3"
          onItemClick={onBusStopSelect}
        />
      </div>
    </div>
  );
};

export default BuslineStopsList;
