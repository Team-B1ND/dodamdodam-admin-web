import { Dispatch, memo, SetStateAction } from "react";
import useDeletePlace from "../../../hooks/place/useDeletePlace";
import { useGetPlacesQuery } from "../../../quries/place/place.query";
import Button from "../../Common/Button";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import { PlaceListButtonWrap } from "./style";

interface Props {
  keyword: string;
  setSelectModifyPlaceId: Dispatch<SetStateAction<number>>;
}

const PlaceList = ({ keyword, setSelectModifyPlaceId }: Props) => {
  const { data: serverPlacesData } = useGetPlacesQuery({ suspense: true });
  const { onDeletePlace } = useDeletePlace();

  return (
    <CTableScrollWrapper customStyle={{ width: 664, height: 568 }}>
      <CTable>
        <CTBody>
          {serverPlacesData?.data.map(
            (place) =>
              place.name.indexOf(keyword) > -1 && (
                <CTR>
                  <CTD customStyle={{ minWidth: 224 }}>{place.type.name}</CTD>
                  <CTD customStyle={{ minWidth: 214 }}>{place.name}</CTD>
                  <CTD customStyle={{ width: "100%", textAlign: "right" }}>
                    <PlaceListButtonWrap>
                      <Button
                        type="Primary"
                        title="수정"
                        customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                        onClick={() => setSelectModifyPlaceId(place.id)}
                      />
                      <Button
                        type="Cancel"
                        title="삭제"
                        customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                        onClick={() => onDeletePlace(place.id)}
                      />
                    </PlaceListButtonWrap>
                  </CTD>
                </CTR>
              )
          )}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default memo(PlaceList);
