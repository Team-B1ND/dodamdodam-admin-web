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

export interface deleteTimeTableParam {
  id: number;
}
