import { useLocation } from "react-router-dom";
import PageTemplate from "../../components/Common/PageTemplate";

const HomePage = () => {
  const router = useLocation();

  console.log(router);

  return (
    <PageTemplate>
      <div></div>
    </PageTemplate>
  );
};

export default HomePage;
