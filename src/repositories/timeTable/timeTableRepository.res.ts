import { Response } from "../../types/util/util.type";
import { timeTableType } from "./timeTableRepository.param";

export interface getTimeTablesData {
  id: number;
  name: string;
  startTime: string;
  endTime: string;
  type: timeTableType;
}

export interface getTimeTablesDataResponse extends Response {
  data: getTimeTablesData[];
}

export interface getTimeTableTypeResponse extends Response {
  data: getTimeTablesData[];
}
