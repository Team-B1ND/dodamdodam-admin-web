import { Response } from "../../types/util/util.type";

export interface TimeTablesData {
  endTime: string;
  id: number;
  name: string;
  startTime: string;
  type: string;
}

export interface TimeTablesDataResponse extends Response {
  data: TimeTablesData[];
}

export interface CreateTimeTableData {
  endTime: string;
  name: string;
  startTime: string;
  type: string;
}
