import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useUploadBannerMutation } from "../../quries/Banner/Banner.query";
import { useUploadImageMutation } from "../../quries/Upload/Upload.query";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../quries/QueryKey";
import dayjs from "dayjs";

const useUplodaBanner = () => {
  const queryClient = useQueryClient();
  const uploadBannerMutation = useUploadBannerMutation();
  const [fileName, setFileName] = useState<File>();
  const uploadMutation = useUploadImageMutation();
  const [uploadData, setUploadData] = useState({
    expireAt: "",
    image: "",
    title: "",
    url: "",
  });

  const onChangeImage = (event: ChangeEvent<HTMLInputElement> | any) => {
    let image: File;
    image = event.target.files[0];
    setFileName(image);

    const formData = new FormData();
    formData.append("file", image);

    uploadMutation.mutate(
      {
        formData,
      },
      {
        onSuccess: (data) => {
          setUploadData((prev) => ({ ...prev, image: data.data }));
        },
      },
    );
  };

  const onChangeUploadData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUploadData((prev) => ({ ...prev, [name]: value }));
  };

  const checkRequiredRequest = () => {
    const { title, url, image, expireAt } = uploadData;

    if (title.trim() === "") {
      B1ndToast.showInfo("제목을 입력해주세요.");
      return false;
    }

    if (url.trim() === "") {
      B1ndToast.showInfo("링크를 입력해주세요.");
      return false;
    }

    if (image === "") {
      B1ndToast.showInfo("이미지를 선택해주세요.");
      return false;
    }

    if (expireAt === "") {
      B1ndToast.showInfo("날짜를 선택해주세요.");
      return false;
    }

    if (dayjs(expireAt).isBefore(dayjs().subtract(1, "day"))) {
      B1ndToast.showInfo("오늘 날짜 이후로 선택해주세요.");
      return false;
    }

    return true;
  };

  const onSubmitUploadData = () => {
    if (checkRequiredRequest()) {
      uploadBannerMutation.mutate(
        {
          ...uploadData,
          expireAt: uploadData.expireAt + "T23:59:59",
        },
        {
          onSuccess: () => {
            B1ndToast.showSuccess("배너가 등록되었습니다");
            queryClient.invalidateQueries(QUERY_KEYS.banner.get)
            setUploadData({
              expireAt: "",
              image: "",
              title: "",
              url: "",
            });
          },
          onError: () => {
            B1ndToast.showError("배너 등록 실패");
          },
        },
      );
    }
  };

  return {
    fileName,
    onSubmitUploadData,
    onChangeUploadData,
    onChangeImage,
    uploadData,
  };
};

export default useUplodaBanner;
