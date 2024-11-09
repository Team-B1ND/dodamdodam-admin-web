import { useState } from "react";
import {
  useActiveBannersMutation,
  useDeativeBannersMutation,
  useDeleteBannerMutation,
} from "../../quries/Banner/Banner.query";
import { B1ndToast } from "@b1nd/b1nd-toastify";
import { useQueryClient } from "react-query";
import { QUERY_KEYS } from "../../quries/QueryKey";

interface Props {
  id: number;
  status: "ACTIVE" | "DEACTIVETED";
}

const useHandleBanner = ({ id, status }: Props) => {
  const activeBannerMutation = useActiveBannersMutation();
  const deativateBannerMutation = useDeativeBannersMutation();
  const deleteBannerMutation = useDeleteBannerMutation();
  const queryClient = useQueryClient();

  const [isAllowed, setIsAllowed] = useState(status === "ACTIVE" ? true : false);

  const handleChangeBannerAllow = () => {
    if (!isAllowed) {
      activeBannerMutation.mutate(
        { id },
        {
          onSuccess: () => {
            setIsAllowed(true);
          },
        },
      );
    } else {
      deativateBannerMutation.mutate(
        { id },
        {
          onSuccess: () => {
            setIsAllowed(false);
          },
        },
      );
    }
  };

  const handleDeleteBanner = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const answer = window.confirm("배너를 삭제하시겠습니까?");

    if (answer) {
      deleteBannerMutation.mutate(
        { id },
        {
          onSuccess: () => {
            B1ndToast.showSuccess("배너 삭제 성공");
            queryClient.invalidateQueries([QUERY_KEYS.banner.get]);
          },
          onError: () => {
            B1ndToast.showError("배너 삭제 실패");
          },
        },
      );
    }
  };

  return { isAllowed, handleChangeBannerAllow, handleDeleteBanner };
};

export default useHandleBanner;
