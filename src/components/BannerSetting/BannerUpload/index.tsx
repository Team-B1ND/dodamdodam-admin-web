import * as S from "./style";
import useUplodaBanner from "../../../hooks/Banner/useUploadBanner";

const BannerUpload = () => {
  const {
    onChangeUploadData,
    onSubmitUploadData,
    onChangeImage,
    fileName,
    uploadData,
  } = useUplodaBanner();

  return (
    <S.BannerPostWrap>
      <S.BannerPostItemWrap>
        <S.BannerFlex>
          <S.BannerInputBox>
            <S.BannerInputName>제목</S.BannerInputName>
            <S.BannerSmallInput
              name="title"
              placeholder="제목을 입력해주세요."
              value={uploadData.title}
              onChange={onChangeUploadData}
            />
          </S.BannerInputBox>
          <S.BannerInputBox>
            <S.BannerInputName>보관 기관</S.BannerInputName>
            <S.BannerSmallInput
              name="expireAt"
              value={uploadData.expireAt}
              onChange={onChangeUploadData}
              type="date"
            />
          </S.BannerInputBox>
        </S.BannerFlex>
        <S.BannerInputBox>
          <S.BannerInputName>링크</S.BannerInputName>
          <S.BannerBigInput
            name="url"
            value={uploadData.url}
            onChange={onChangeUploadData}
            placeholder="https://dodam.b1nd.com"
          />
        </S.BannerInputBox>
        <S.BannerInputBox>
          <S.BannerInputName>이미지</S.BannerInputName>
          <S.BannerFlex>
            <S.BannerFileInputBox
              value={uploadData.image ? fileName?.name : "파일을 선택해주세요"}
              disabled
            />
            <S.BannerFileLabel htmlFor="file">이미지 선택</S.BannerFileLabel>
            <S.BannerFileInput
              name="image"
              onChange={onChangeImage}
              type="file"
              id="file"
            />
          </S.BannerFlex>
        </S.BannerInputBox>
      </S.BannerPostItemWrap>
      <S.BannerButtonBox>
        <S.BannerPostSubmitButton onClick={onSubmitUploadData}>
          등록
        </S.BannerPostSubmitButton>
      </S.BannerButtonBox>
    </S.BannerPostWrap>
  );
};

export default BannerUpload;
