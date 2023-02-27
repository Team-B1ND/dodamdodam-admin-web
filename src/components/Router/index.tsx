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
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/joinapproval" element={<JoinApprovalPage />} />
      <Route path="/timetable" element={<TimeTablePage />} />
      <Route path="/classroom" element={<ClassroomPage />} />
      <Route path="/classroom/:id" element={<ClassroomPage />} />
      <Route path="/place" element={<PlacePage />} />
      <Route path="/place/id" element={<PlacePage />} />
      <Route path="/placetype" element={<PlaceTypePage />} />
      <Route path="/placetype/:id" element={<PlaceTypePage />} />
      <Route path="/authority" element={<AuthorityPage />} />
      <Route path="/member" element={<MemberPage />} />
      <Route path="/numberSetting" element={<NumberSettingPage />} />
    </Routes>
  );
};

export default Router;
