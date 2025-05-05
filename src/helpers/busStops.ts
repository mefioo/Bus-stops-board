import { StopSortFunctionType, StopTimeType, StopType } from "@/types";

export const sortBusStopsByTime = (a: StopTimeType, b: StopTimeType) => {
  const [ah, am] = a.split(":").map(Number);
  const [bh, bm] = b.split(":").map(Number);

  const totalMinutesA = ah * 60 + am;
  const totalMinutesB = bh * 60 + bm;

  return totalMinutesA - totalMinutesB;
};

export const getStopSortFunctionByType = (type: StopSortFunctionType) => {
  switch (type) {
    case StopSortFunctionType.orderAsc:
      return (a: StopType, b: StopType) => a.order - b.order;
    case StopSortFunctionType.orderDesc:
      return (a: StopType, b: StopType) => b.order - a.order;
    case StopSortFunctionType.nameDesc:
      return (a: StopType, b: StopType) => b.stop.localeCompare(a.stop);
    case StopSortFunctionType.nameAsc:
    default:
      return (a: StopType, b: StopType) => a.stop.localeCompare(b.stop);
  }
};

export const getSortTypeByName = (prev: StopSortFunctionType) => {
  return prev === StopSortFunctionType.nameAsc
    ? StopSortFunctionType.nameDesc
    : StopSortFunctionType.nameAsc;
};

export const getSortTypeByOrder = (prev: StopSortFunctionType) => {
  return prev === StopSortFunctionType.orderAsc
    ? StopSortFunctionType.orderDesc
    : StopSortFunctionType.orderAsc;
};
