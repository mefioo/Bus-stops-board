import { SelectedLineType } from "@/types";
import React, { FC } from "react";

interface PropTypes {
  selectedLine: SelectedLineType;
}

const BuslineStopsList: FC<PropTypes> = ({ selectedLine }) => {
  return <div className="card w-100">{selectedLine}</div>;
};

export default BuslineStopsList;
