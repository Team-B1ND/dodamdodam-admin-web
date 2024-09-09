import { activeStatus } from "repositories/joinApproval/joinApproval.param";

export interface deleteMemberParam {
  id: string;
}

export interface getMemberByIdParam {
  id: string;
}

export interface getMebmerByStatus {
  status: activeStatus;
}
