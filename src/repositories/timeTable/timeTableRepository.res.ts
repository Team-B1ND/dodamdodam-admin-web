import { TimeTable } from "types/timeTable/timeTable";
import { Response } from "../../types/util/util.type";

export interface getTimeTablesDataResponse extends Response {
  data: TimeTable[];
}

export interface getTimeTableTypeResponse extends Response {
  data: TimeTable[];
}
