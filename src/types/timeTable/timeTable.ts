export interface TimeTables {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  type: TimeTableType;
}

export interface TimeTableType {
  type: string;
}
