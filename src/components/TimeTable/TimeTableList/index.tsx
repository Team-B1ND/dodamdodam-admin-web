import useDeleteTimeTable from "hooks/timeTable/useDeleteTimeTable";
import { Dispatch, SetStateAction } from "react";
import { useGetTimeTableQuery } from '../../../quries/timeTable/timeTable.query';
import Button from '../../Common/Button';
import CTable, { CTableScrollWrapper } from '../../Common/CTable';
import CTBody from '../../Common/CTable/CTBody';
import CTD from '../../Common/CTable/CTD';
import CTR from '../../Common/CTable/CTR';
import { TimeTableListButtonWrap } from './style';

interface Props {
    setModifyModalIsOpen: Dispatch<SetStateAction<boolean>>;
    setTimeTableId: Dispatch<SetStateAction<number>>;
}

const TimeTableList = ({ setModifyModalIsOpen, setTimeTableId }: Props) => {
    const { data: TimeTableData } = useGetTimeTableQuery();
    const { deleteTimeTable } = useDeleteTimeTable();

    return (
        <CTableScrollWrapper customStyle={{ width: 800, height: 568 }}>
            <CTable>
                <CTBody>
                    {TimeTableData?.data.map(
                        (item) =>
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
                                                setTimeTableId(item.id)
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
                    )}
                </CTBody>
            </CTable>
        </CTableScrollWrapper>
    );
};

export default TimeTableList;