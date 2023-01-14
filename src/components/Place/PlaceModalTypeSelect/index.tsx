import { Dispatch, SetStateAction } from "react";
import { useGetPlaceTypesQuery } from "../../../quries/place/place.query";
import Select from "../../Common/Select";

interface Props {
  placeTypeName: string;
  setPlaceTypeName: Dispatch<SetStateAction<string>>;
}

const PlaceModalTypeSelect = ({ placeTypeName, setPlaceTypeName }: Props) => {
  const { data: serverPlaceTypesData } = useGetPlaceTypesQuery({
    suspense: true,
  });

  return (
    <Select
      items={[...serverPlaceTypesData!.data.map((item) => item.name)]}
      value={placeTypeName}
      onChange={setPlaceTypeName}
    />
  );
};

export default PlaceModalTypeSelect;
