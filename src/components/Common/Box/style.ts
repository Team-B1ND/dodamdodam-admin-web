import styled, {
  CSSObject,
  FlattenSimpleInterpolation,
  css,
} from "styled-components";
import { SizeType } from "./types";

export const BannerContentBox = styled.div<{
  size: SizeType;
  customStyle?: CSSObject;
}>`
  padding: 30px 15px;
  border: 1px solid #d2d2d2;
  overflow-y: auto;

  ${({ customStyle }) => customStyle}
  ${({ size }) => sizeStyle[size]}
`;

const sizeStyle: Record<SizeType, FlattenSimpleInterpolation> = {
  lg: css`
    width: 700px;
    height: 680px;
    overflow-y: hidden;
  `,
  sm: css`
    width: 480px;
    height: 351px;
  `,
};
