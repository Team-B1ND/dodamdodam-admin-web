import * as S from "./style";
import { FcDocument } from "react-icons/fc";
import BannerUpload from "./BannerUpload";
import BannerList from "./BannerList";
import BannerHandler from "./BannerHandler";

const BannerSetting = () => {
  return (
    <>
      <S.BannerTopWrap>
        <FcDocument size={29} />
        <S.BannerTitle>배너 관리</S.BannerTitle>
      </S.BannerTopWrap>
      <S.Row>
        <BannerList />
        <S.Column>
          <BannerUpload />
          <BannerHandler />
        </S.Column>
      </S.Row>
    </>
  );
};

export default BannerSetting;
