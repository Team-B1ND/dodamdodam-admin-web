import SectionHeader from "../Common/SectionHeader";
import Table from "../Common/Table";
import TH from "../Common/Table/TH";
import THead from "../Common/Table/THead";
import TR from "../Common/Table/TR";

const Place = () => {
  return (
    <div>
      <SectionHeader
        title="장소 관리"
        subTitle="장소를 추가/수정/삭제할 수 있습니다"
      >
        <button></button>
      </SectionHeader>
      <Table customStyle={{ width: 664 }}>
        <THead>
          <TR>
            <TH>장소분류</TH>
            <TH>장소이름</TH>
            <TH customStyle={{ textAlign: "right" }}>수정 / 삭제</TH>
          </TR>
        </THead>
      </Table>
    </div>
  );
};

export default Place;
