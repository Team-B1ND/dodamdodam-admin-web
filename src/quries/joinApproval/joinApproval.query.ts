import { useMutation, useQuery } from "react-query";
import JoinApprovalRepository from "repositories/joinApproval/joinApprovalRepository";

export const usePostJoinApprovalAllow = () => {
  const mutation = useMutation(() =>
    JoinApprovalRepository.PostJoinApprovalAllow()
  );
  return mutation;
};

export const useGetNotJoinApprovalAllowMember = () =>
  useQuery("joinApproval/getNotAllowMember", () =>
    JoinApprovalRepository.GetNotJoinApprovalAllowMember()
  );
