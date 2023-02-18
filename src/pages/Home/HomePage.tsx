import { SwitchCase } from "@b1nd/b1nd-react-util";
import { useLocation } from "react-router-dom";
import PageTemplate from "../../components/Common/PageTemplate";
import AuthorityPage from "./AuthorityPage";
import ClassroomPage from "./ClassroomPage";
import MemberPage from "./MemberPage";
import NumberSettingPage from "./NumberSettingPage";
import PlacePage from "./PlacePage";
import PlaceTypePage from "./PlaceTypePage";
import JoinApprovalPage from "./JoinApprovalPage";
import TimeTablePage from "./TimeTablePage";

const HomePage = () => {
  const router = useLocation();

  return (
    <PageTemplate>
      <SwitchCase
        value={router.pathname.slice(1)}
        caseBy={{
          joinApproval: <JoinApprovalPage />,
          timetable: <TimeTablePage />,
          classroom: <ClassroomPage />,
          place: <PlacePage />,
          placetype: <PlaceTypePage />,
          authority: <AuthorityPage />,
          member: <MemberPage />,
          numberSetting: <NumberSettingPage />,
        }}
        defaultComponent={<>404</>}
      />
    </PageTemplate>
  );
};

export default HomePage;
