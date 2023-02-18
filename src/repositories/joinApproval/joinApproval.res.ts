import { Response } from "../../types/util/util.type";
import { notAllowMemberParam } from "./joinApproval.param";

export interface getNotAllowMemberResponse extends Response {
  data: notAllowMemberParam[];
}
