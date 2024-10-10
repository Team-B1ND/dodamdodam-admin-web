import { activeStatus } from "repositories/JoinApprovalRepository/joinApproval.param";

export interface deleteMemberParam {
  id: string;
}

export interface getMemberByIdParam {
  id: string;
}

export interface getMebmerByStatus {
  status: activeStatus;
}
