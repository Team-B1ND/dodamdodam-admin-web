import { useNavigate } from "react-router-dom";
import useDeletePlaceType from "../../../hooks/place/useDeletePlaceType";
import { useGetPlaceTypesQuery } from "../../../quries/place/place.query";
import Button from "../../Common/Button";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import { PlaceTypeListButtonWrap } from "./style";

const PlaceTypeList = () => {
  const navigate = useNavigate();

  const { data: serverPlaceTypesData } = useGetPlaceTypesQuery({
    suspense: true,
  });

  const { onDeletePlaceType } = useDeletePlaceType();

  return (
    <CTableScrollWrapper customStyle={{ width: 664, height: 568 }}>
      <CTable customStyle={{ width: 664 }}>
        <CTBody>
          {serverPlaceTypesData?.data.map((placeType) => (
            <CTR>
              <CTD customStyle={{ width: "50%" }}>{placeType.name}</CTD>
              <CTD customStyle={{ width: "50%" }}>
                <PlaceTypeListButtonWrap>
                  <Button
                    type="Primary"
                    title="수정"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => navigate(`/placetype/${placeType.id}`)}
                  />
                  <Button
                    type="Cancel"
                    title="삭제"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => onDeletePlaceType(placeType.id)}
                  />
                </PlaceTypeListButtonWrap>
              </CTD>
            </CTR>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default PlaceTypeList;
