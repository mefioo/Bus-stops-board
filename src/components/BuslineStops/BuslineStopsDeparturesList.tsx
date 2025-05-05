import React, { FC } from "react";
import List from "../Common/List";
import { StopType } from "@/types";
import { sortBusStopsByTime } from "@/helpers/busStops";

interface PropTypes {
  selectedBusStopName: string | null;
  selectedLineAndNameBusStops: StopType[];
}

const BuslineStopsDeparturesList: FC<PropTypes> = ({
  selectedBusStopName,
  selectedLineAndNameBusStops,
}) => {
  const sorted = [
    ...new Set(
      selectedLineAndNameBusStops
        .map((item) => item.time)
        .toSorted(sortBusStopsByTime)
    ),
  ];

  return (
    <div className="card w-100">
      <h6 className="px-4 pt-4 pb-1 lh-base">
        Bus Stop: {selectedBusStopName}
      </h6>
      <span className="fw-semibold font-12 lh-sm p-4 border-bottom">Time</span>
      <List maxHeight={322} items={sorted} itemClassName="px-4" />
    </div>
  );
};

export default BuslineStopsDeparturesList;
