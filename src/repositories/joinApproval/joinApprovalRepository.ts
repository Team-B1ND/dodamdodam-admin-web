import { customAxios } from "lib/axios/customAxios";

class JoinApprovalRepository {
  public async PostJoinApproval() {
    const { data } = await customAxios.post("auth/allow"); //회원가입 승인
    return data;
  }

  public async PostJoinDeny() {
    const { data } = await customAxios.post("auth/deny");
    return data;
  }
}

export default new JoinApprovalRepository();
