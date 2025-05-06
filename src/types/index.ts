export type StopTimeType = `${number | ""}${number}:${number}${number}`;

export interface StopType {
  line: number;
  stop: string;
  order: number;
  time: StopTimeType;
}

export type SelectedLineType = number | null;
export type SelectedBusStopType = string | null;
export enum StopSortFunctionType {
  nameAsc,
  nameDesc,
  orderAsc,
  orderDesc,
}

export interface BusStopContextValueType {
  loading: boolean;
  error: string | null;
  stops: StopType[] | [];
}
