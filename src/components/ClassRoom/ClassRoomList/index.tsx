import useDeleteClassRoom from "../../../hooks/classRoom/useDeleteClassRoom";
import { useGetClassRoomsQuery } from "../../../quries/classRoom/classRoom.query";
import Button from "../../Common/Button";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import { ClassRoomListButtonWrap } from "./style";

const ClassRoomList = () => {
  const { data: serverClassRoomsData } = useGetClassRoomsQuery({
    suspense: true,
  });

  const { onDeleteClassRoom } = useDeleteClassRoom();

  return (
    <CTableScrollWrapper customStyle={{ width: 664, height: 568 }}>
      <CTable customStyle={{ width: 664 }}>
        <CTBody>
          {serverClassRoomsData?.data.map((classRoom) => (
            <CTR>
              <CTD
                customStyle={{ width: "50%" }}
              >{`${classRoom.grade}학년 ${classRoom.room}반`}</CTD>
              <CTD customStyle={{ width: "50%" }}>
                <ClassRoomListButtonWrap>
                  <Button
                    type="Primary"
                    title="수정"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => {}}
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

export default ClassRoomList;
