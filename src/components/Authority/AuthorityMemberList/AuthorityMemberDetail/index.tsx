import {
  useGetBroadcastClubMemberByIdQuery,
  useGetMemberById,
} from "quries/member/member.query";
import { memo } from "react";
import { useParams } from "react-router-dom";
import * as S from "./style";
import { useGrantBroadcastClubMember } from "hooks/Members/useGrantBroadcastClubMember";

const AuthorityMemberDetail = () => {
  const { id } = useParams();

  const { data: isBroadcastClubMember } = useGetBroadcastClubMemberByIdQuery({
    id: id || "",
  });
  const { data: memberData } = useGetMemberById({ id: id || "" });

  const { handleGrantBroadcastClubMemberClick } = useGrantBroadcastClubMember();

  return (
    <>
      {id && (
        <S.PermissionDetailContainer>
          <S.PermissionOwnerTitle>
            {`${memberData?.data.name || ""} 님의 정보`}
          </S.PermissionOwnerTitle>

          <S.PermissionSubtitleWrap>
            <S.PermissionSubtitle>부여 된 권한</S.PermissionSubtitle>
            <S.AuthorityAddSubButton>방송부 권한 회수</S.AuthorityAddSubButton>
          </S.PermissionSubtitleWrap>

          <div>
            {isBroadcastClubMember?.data ? (
              <S.AuthorityIsExistWrap>- 방송부</S.AuthorityIsExistWrap>
            ) : (
              <S.AuthorityIsNotExistWrap>
                부여 된 권한이 없습니다.
              </S.AuthorityIsNotExistWrap>
            )}
          </div>

          <S.PermissionSubtitleWrap>
            <S.PermissionSubtitle>부여 가능한 권한</S.PermissionSubtitle>
            <S.AuthorityAddSubButton
              onClick={(e) => {
                id && handleGrantBroadcastClubMemberClick(e, id);
              }}
            >
              방송부 권한 주기
            </S.AuthorityAddSubButton>
          </S.PermissionSubtitleWrap>

          <div>
            {!isBroadcastClubMember?.data ? (
              <S.AuthorityIsExistWrap>- 방송부</S.AuthorityIsExistWrap>
            ) : (
              <S.AuthorityIsNotExistWrap>
                부여 가능한 권한이 없습니다.
              </S.AuthorityIsNotExistWrap>
            )}
          </div>
        </S.PermissionDetailContainer>
      )}
    </>
  );
};

export default memo(AuthorityMemberDetail);
