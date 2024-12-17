import * as S from './style';
import BannerUpload from './BannerUpload';
import BannerList from './BannerList';
import BannerHandler from './BannerHandler';
import SectionHeader from 'components/Common/SectionHeader';

const BannerSetting = () => {
  return (
    <S.BannerContainer>
      <SectionHeader title="배너 관리" subTitle="배너 등록 및 수정을 진행할 수 있습니다." />
      <S.Row>
        <BannerList />
        <S.Column>
          <BannerUpload />
        </S.Column>
      </S.Row>
    </S.BannerContainer>
  );
};

export default BannerSetting;
