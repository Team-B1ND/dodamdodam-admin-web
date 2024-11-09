import { BannerContentBox } from "./style";
import { BannerBoxProps } from "./types";

const BannerBox = ({ size, children, style }: BannerBoxProps) => {
  return (
    <BannerContentBox customStyle={style} size={size}>
      {children}
    </BannerContentBox>
  );
};

export default BannerBox;
