import { Response } from "../../types/util/util.type";
import { NotAllowMember } from "./joinApproval.param";

export interface getNotAllowMember extends Response {
  data: NotAllowMember[];
}
