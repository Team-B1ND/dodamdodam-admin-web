import { ChangeEvent } from "react";
import { useGetPlacesQuery } from "../../../quries/place/place.query";
import BrowserSelect from "../../Common/BrowserSelect";
import BrowserSelectOption from "../../Common/BrowserSelect/BrowserSelectOption";

interface Props {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  isServerDataDefault?: boolean;
}

const ClassRoomPlaceSelect = ({
  onChange,
  isServerDataDefault = false,
}: Props) => {
  const { data: serverPlacesData } = useGetPlacesQuery({ suspense: true });

  return (
    <BrowserSelect
      onChange={(e) => onChange(e)}
      defaultValue={
        isServerDataDefault
          ? serverPlacesData?.data[0].name
          : "장소를 선택해주세요"
      }
    >
      {serverPlacesData?.data.map((place) => (
        <BrowserSelectOption value={place.name}>
          {place.name}
        </BrowserSelectOption>
      ))}
    </BrowserSelect>
  );
};

export default ClassRoomPlaceSelect;
