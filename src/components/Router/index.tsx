import withAuth from "components/HOC/withAuth";
import AuthorityPage from "pages/Home/AuthorityPage";
import ClassroomPage from "pages/Home/ClassroomPage";
import JoinApprovalPage from "pages/Home/JoinApprovalPage";
import MemberPage from "pages/Home/MemberPage";
import NumberSettingPage from "pages/Home/NumberSettingPage";
import PlacePage from "pages/Home/PlacePage";
import PlaceTypePage from "pages/Home/PlaceTypePage";
import TimeTablePage from "pages/Home/TimeTablePage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../../pages/Auth/AuthPage";

const Router = () => {
  const AuthJoinApprovalPage = withAuth(JoinApprovalPage);
  const AuthTimeTablePage = withAuth(TimeTablePage);
  const AuthClassroomPage = withAuth(ClassroomPage);
  const AuthPlacePage = withAuth(PlacePage);
  const AuthPlaceTypePage = withAuth(PlaceTypePage);
  const AuthAuthorityPage = withAuth(AuthorityPage);
  const AuthMemberPage = withAuth(MemberPage);
  const AuthNumberSettingPage = withAuth(NumberSettingPage);

  return (
    <Routes>
      <Route path="/sign" element={<AuthPage />} />
      <Route path="/joinapproval" element={<AuthJoinApprovalPage />} />
      <Route path="/timetable" element={<AuthTimeTablePage />} />
      <Route path="/timetable/:id" element={<TimeTablePage />} />
      <Route path="/classroom" element={<AuthClassroomPage />} />
      <Route path="/classroom/:id" element={<AuthClassroomPage />} />
      <Route path="/place" element={<AuthPlacePage />} />
      <Route path="/place/:id" element={<AuthPlacePage />} />
      <Route path="/placetype" element={<AuthPlaceTypePage />} />
      <Route path="/placetype/:id" element={<AuthPlaceTypePage />} />
      <Route path="/authority" element={<AuthAuthorityPage />} />
      <Route path="/member" element={<AuthMemberPage />} />
      <Route path="/numberSetting" element={<AuthNumberSettingPage />} />
    </Routes>
  );
};

export default Router;
