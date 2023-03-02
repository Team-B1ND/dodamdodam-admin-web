import { useNavigate } from "react-router-dom";
import token from "../../lib/token";

const useLogout = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    token.clearToken();
    navigate("/sign");
  };

  return { onLogout };
};

export default useLogout;
