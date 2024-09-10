import { activeStatus } from "repositories/joinApproval/joinApproval.param";

export const convertStatus = (status: string): activeStatus => {
  switch (status) {
    case "대기중":
      return "PENDING";
    case "비활성화":
      return "DEACTIVATED";
    default:
      return "ACTIVE";
  }
};
