import { useState } from "react";
import Button from "../Common/Button";
import Modal from "../Common/Modal";
import SearchBar from "../Common/SearchBar";
import SectionHeader from "../Common/SectionHeader";
import Select from "../Common/Select";
import Table from "../Common/Table";
import TH from "../Common/Table/TH";
import THead from "../Common/Table/THead";
import TR from "../Common/Table/TR";
import { PlaceContainer, PlaceInputWrap } from "./style";

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

      <Table customStyle={{ width: 664 }}>
        <THead>
          <TR>
            <TH>장소분류</TH>
            <TH>장소이름</TH>
            <TH customStyle={{ textAlign: "right" }}>수정 / 삭제</TH>
          </TR>
        </THead>
      </Table>
      <Modal
        zIndex={2}
        isOpen={open}
        setIsOpen={setOpen}
        customStyle={{ width: 410, height: 490 }}
      >
        asdasd
      </Modal>
    </PlaceContainer>
  );
};

export default Place;
