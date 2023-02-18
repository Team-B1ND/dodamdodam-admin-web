import { Route, Routes } from "react-router-dom";
import AuthPage from "../../pages/Auth/AuthPage";
import HomePage from "../../pages/Home/HomePage";

const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/joinapproval" element={<HomePage />} />
      <Route path="/timetable" element={<HomePage />} />
      <Route path="/classroom" element={<HomePage />} />
      <Route path="/place" element={<HomePage />} />
      <Route path="/placetype" element={<HomePage />} />
      <Route path="/authority" element={<HomePage />} />
      <Route path="/member" element={<HomePage />} />
      <Route path="/numberSetting" element={<HomePage />} />
    </Routes>
  );
};

export default Router;
