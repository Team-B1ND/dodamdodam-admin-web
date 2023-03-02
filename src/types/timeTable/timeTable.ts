export interface TimeTable {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  type: timeTableType;
}

export interface timeTableType {
  type: string;
}
