import { useState } from "react";
import Button from "../Common/Button";
import Modal from "../Common/Modal";
import ModalHeader from "../Common/ModalHeader";
import SearchBar from "../Common/SearchBar";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import CTable from "../Common/CTable";
import CTH from "../Common/CTable/CTH";
import CTHead from "../Common/CTable/CTHead";
import CTR from "../Common/CTable/CTR";
import {
  PlaceContainer,
  PlaceInputWrap,
  PlaceModalButtonWrap,
  PlaceModalWrap,
} from "./style";

const Place = () => {
  const [grade, setGrade] = useState("전체보기");
  const onSubmit = () => {
    console.log(value);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <PlaceContainer>
      <SectionHeader
        title="장소 관리"
        subTitle="장소를 추가/수정/삭제할 수 있습니다"
      >
        <Button
          onClick={() => setOpen(true)}
          title="추가하기"
          type={"Primary"}
        />
      </SectionHeader>
      <PlaceInputWrap>
        <Select
          items={["전체보기", "1학년", "2학년", "3학년"]}
          value={grade}
          onChange={setGrade}
        />
        <SearchBar onSubmit={onSubmit} onChange={setValue} value={value} />
      </PlaceInputWrap>

      <CTable customStyle={{ width: 664 }}>
        <CTHead>
          <CTR>
            <CTH>장소분류</CTH>
            <CTH>장소이름</CTH>
            <CTH customStyle={{ textAlign: "right" }}>수정 / 삭제</CTH>
          </CTR>
        </CTHead>
      </CTable>
      <Modal
        zIndex={2}
        isOpen={open}
        setIsOpen={setOpen}
        customStyle={{ width: 410, height: 490 }}
      >
        <ModalHeader title="장소 추가하기" />
        <PlaceModalWrap>
          <PlaceModalButtonWrap>
            <Button
              type="Primary"
              title="확인"
              customStyle={{
                width: 66,
                height: 32,
                borderRadius: 5,
                fontSize: 12,
              }}
              onClick={() => {}}
            />
            <Button
              type="Cancel"
              title="취소"
              customStyle={{
                width: 66,
                height: 32,
                borderRadius: 5,
                fontSize: 12,
              }}
              onClick={() => {}}
            />
          </PlaceModalButtonWrap>
        </PlaceModalWrap>
      </Modal>
    </PlaceContainer>
  );
};

export default Place;
