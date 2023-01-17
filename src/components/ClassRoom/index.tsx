import { useState } from "react";
import Button from "../Common/Button";
import SectionHeader from "../Common/SectionHeader";
import { ClassRoomContainer } from "./style";

const ClassRoom = () => {
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);

  return (
    <ClassRoomContainer>
      <SectionHeader
        title="교실관리"
        subTitle="교실을 추가/수정/삭제 할 수 있습니다"
      >
        <Button
          title="추가하기"
          type="Primary"
          onClick={() => setCreateModalIsOpen(true)}
        />
      </SectionHeader>
    </ClassRoomContainer>
  );
};

export default ClassRoom;
