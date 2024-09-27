import * as S from "./style";
import { BannerWrapTitle } from "../style";
import { useGetBannersQuery } from "../../../queries/Banner/Banner.query";
import BannerBox from "../../common/Box";
import BannerItem from "./BannerItem";

const BannerList = () => {
  const { data } = useGetBannersQuery({
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
  });

  return (
    <BannerBox size="lg">
      <BannerWrapTitle>배너 목록</BannerWrapTitle>
      <S.BannerItemsContainer>
        {data?.data.map((data) => (
          <BannerItem key={data.id} data={data} />
        ))}
      </S.BannerItemsContainer>
    </BannerBox>
  );
};

export default BannerList;
