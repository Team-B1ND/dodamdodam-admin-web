import withAuth from "components/HOC/withAuth";
import AuthorityPage from "pages/Home/AuthorityPage";
import JoinApprovalPage from "pages/Home/JoinApprovalPage";
import MemberPage from "pages/Home/MemberPage";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../../pages/Auth/AuthPage";

const Router = () => {
  const AuthJoinApprovalPage = withAuth(JoinApprovalPage);
  const AuthAuthorityPage = withAuth(AuthorityPage);
  const AuthMemberPage = withAuth(MemberPage);

  return (
    <Routes>
      <Route path="/sign" element={<AuthPage />} />
      <Route path="/joinapproval" element={<AuthJoinApprovalPage />} />
      <Route path="/authority" element={<AuthAuthorityPage />} />
      <Route path="/authority/:id" element={<AuthAuthorityPage />} />
      <Route path="/member" element={<AuthMemberPage />} />
    </Routes>
  );
};

export default Router;
