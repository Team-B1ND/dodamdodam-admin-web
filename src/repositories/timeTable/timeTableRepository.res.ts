import { TimeTables } from "types/timeTable/timeTable";
import { Response } from "../../types/util/util.type";

export interface getTimeTablesDataResponse extends Response {
  data: TimeTables[];
}

export interface getTimeTablesTypeResponse extends Response {
  data: TimeTables[];
}
