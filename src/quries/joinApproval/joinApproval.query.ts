import { useMutation, useQuery } from "react-query";
import { postJoinMemberId } from "repositories/joinApproval/joinApproval.param";
import JoinApprovalRepository from "repositories/joinApproval/joinApprovalRepository";

export const usePostMemberJoinApproval = () => {
  const mutation = useMutation(({ id }: postJoinMemberId) =>
    JoinApprovalRepository.PostMemberJoinApproval({ id })
  );
  return mutation;
};

export const usePostMemberJoinDeny = () => {
  const mutation = useMutation(({ id }: postJoinMemberId) =>
    JoinApprovalRepository.PostMemberJoinApprovalDeny({ id })
  );
  return mutation;
};

export const useGetNotJoinApprovalAllowMember = () =>
  useQuery("joinApproval/getNotAllowMember", () =>
    JoinApprovalRepository.GetNotJoinApprovalAllowMember()
  );
