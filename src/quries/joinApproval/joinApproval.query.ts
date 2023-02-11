import { useMutation, useQuery } from "react-query";
import { PostJoinMemberId } from "repositories/joinApproval/joinApproval.param";
import JoinApprovalRepository from "repositories/joinApproval/joinApprovalRepository";

export const usePostMemberJoinApproval = () => {
  const mutation = useMutation(({ id }: PostJoinMemberId) =>
    JoinApprovalRepository.PostMemberJoinApproval({ id })
  );
  return mutation;
};

export const usePostMemberJoinApprovalDeny = () => {
  const mutation = useMutation(({ id }: PostJoinMemberId) =>
    JoinApprovalRepository.PostMemberJoinApprovalDeny({ id })
  );
  return mutation;
};

export const useGetNotJoinApprovalAllowMember = () =>
  useQuery("joinApproval/getNotAllowMember", () =>
    JoinApprovalRepository.GetNotJoinApprovalAllowMember()
  );
