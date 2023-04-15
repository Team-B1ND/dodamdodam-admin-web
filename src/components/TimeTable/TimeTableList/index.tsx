import useDeleteTimeTable from "hooks/timeTable/useDeleteTimeTable";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../Common/Button";
import CTable, { CTableScrollWrapper } from "../../Common/CTable";
import CTBody from "../../Common/CTable/CTBody";
import CTD from "../../Common/CTable/CTD";
import CTR from "../../Common/CTable/CTR";
import { TimeTableListButtonWrap } from "./style";
import { TimeTables } from "../../../types/timeTable/timeTable";

interface Props {
  setModifyModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

const TimeTableList = ({ setModifyModalIsOpen }: Props) => {
  const { data: timeTableData } = useGetTimeTableQuery();
  const { deleteTimeTable } = useDeleteTimeTable();
  const navigate = useNavigate();

  return (
    <CTableScrollWrapper customStyle={{ width: 800, height: 568 }}>
      <CTable>
        <CTBody>
          {timeTableData?.data.map((item: TimeTables) => (
            <CTR>
              <CTD customStyle={{ minWidth: 200 }}>{item.name}</CTD>
              <CTD customStyle={{ minWidth: 200 }}>{item.startTime}</CTD>
              <CTD customStyle={{ minWidth: 200 }}>{item.endTime}</CTD>
              <CTD customStyle={{ width: "100%", textAlign: "right" }}>
                <TimeTableListButtonWrap>
                  <Button
                    type="Primary"
                    title="수정"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => {
                      setModifyModalIsOpen(true);
                      navigate(`${item.id}`);
                    }}
                  />
                  <Button
                    type="Cancel"
                    title="삭제"
                    customStyle={{ width: 66, height: 32, borderRadius: 5 }}
                    onClick={() => deleteTimeTable(item.id)}
                  />
                </TimeTableListButtonWrap>
              </CTD>
            </CTR>
          ))}
        </CTBody>
      </CTable>
    </CTableScrollWrapper>
  );
};

export default TimeTableList;
function useGetTimeTableQuery(): { data: any } {
  throw new Error("Function not implemented.");
}
