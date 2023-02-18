import { Dispatch, memo, SetStateAction } from "react";
import useDeleteClassRoom from "../../../hooks/classRoom/useDeleteClassRoom";
import { useGetClassRoomsQuery } from "../../../quries/classRoom/classRoom.query";
import { ClassRoom } from "../../../types/classRoom/classRoom.type";
import Button from "../../Common/Button";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import { ClassRoomListButtonWrap } from "./style";

interface Props {
  classification: string;
  setSelectModifyClassRoomId: Dispatch<SetStateAction<number>>;
}

const ClassRoomList = ({
  classification,
  setSelectModifyClassRoomId,
}: Props) => {
  const { data: serverClassRoomsData } = useGetClassRoomsQuery({
    suspense: true,
  });

  const { onDeleteClassRoom } = useDeleteClassRoom();

  return (
    <CTableScrollWrapper customStyle={{ width: 664, height: 568 }}>
      <CTable customStyle={{ width: 664 }}>
        <CTBody>
          {(() => {
            return classification === "전체보기"
              ? serverClassRoomsData?.data.map((classRoom) => classRoom)
              : serverClassRoomsData?.data.filter(
                  (classRoom) =>
                    classRoom.grade === Number(classification.slice(0, 1))
                );
          })()?.map((classRoom) => (
            <CTR key={classRoom.id}>
              <CTD
                customStyle={{ width: "50%" }}
              >{`${classRoom.grade}학년 ${classRoom.room}반`}</CTD>
              <CTD customStyle={{ width: "50%" }}>
                <ClassRoomListButtonWrap>
                  <Button
                    type="Primary"
                    title="수정"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => setSelectModifyClassRoomId(classRoom.id)}
                  />
                  <Button
                    type="Cancel"
                    title="삭제"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => onDeleteClassRoom(classRoom.id)}
                  />
                </ClassRoomListButtonWrap>
              </CTD>
            </CTR>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default memo(ClassRoomList);
