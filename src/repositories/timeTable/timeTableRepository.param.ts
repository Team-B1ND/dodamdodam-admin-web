export interface createTimeTableDataParam {
  name: string;
  startTime: string;
  endTime: string;
  type: string;
}

export interface modifyTimeTableDataParam {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  type: string;
}

export interface timeTableId {
  id: number;
}

export interface timeTableType {
  type: string;
}
