import { useLocation, useNavigate } from "react-router-dom";
import { MenuItemContainer } from "./style";

interface Props {
  title: string;
  redirectUrl: string;
}

const MenuItem = ({ title, redirectUrl }: Props) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  return (
    <MenuItemContainer
      isArrival={redirectUrl === pathname}
      onClick={() => navigate(redirectUrl)}
    >
      {title}
    </MenuItemContainer>
  );
};

export default MenuItem;
