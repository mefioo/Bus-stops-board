export interface StopType {
  line: number,
  stop: string,
  order: number,
  time: string,
}

export type SelectedLineType = number | null