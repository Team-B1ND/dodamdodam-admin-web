import { Switch } from "@mui/material";
import * as S from "./style";
import { Banner } from "../../../../types/Banner/banner.type";
import dateTransform from "../../../../util/dateTransform";
import useHandleBanner from "../../../../hooks/Banner/useHandleBanner";

interface Props {
  data: Banner;
}

const BannerItem = ({ data }: Props) => {
  const handleDateTime = dateTransform.hyphen(data.expireAt); //data.createdDate
  const { handleChangeBannerAllow, isAllowed, handleDeleteBanner } =
    useHandleBanner({
      id: data.id,
      status: data.status,
    });

  return (
    <S.BannerItemWrap>
      <S.BannerItemFirstBox>
        <Switch
          checked={isAllowed}
          onChange={handleChangeBannerAllow}
          size="small"
        />
        <S.BannerItemText>{handleDateTime}</S.BannerItemText>
      </S.BannerItemFirstBox>
      <S.BannerItemText>{data.title}</S.BannerItemText>
      <S.BannerItemImg
        onClick={() => (window.location.href = data.redirectUrl)}
        src={data.imageUrl}
        alt="배너 이미지"
      />
      <S.DeleteButton onClick={handleDeleteBanner}>삭제</S.DeleteButton>
    </S.BannerItemWrap>
  );
};

export default BannerItem;
