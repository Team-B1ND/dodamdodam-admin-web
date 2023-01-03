import { useNavigate } from "react-router-dom";
import { MenuDropdownChildContainer } from "./style";

interface Props {
  title: string;
  redirectUrl: string;
}

const MenuDropdownChild = ({ title, redirectUrl }: Props) => {
  const navigate = useNavigate();

  return (
    <MenuDropdownChildContainer onClick={() => navigate(redirectUrl)}>
      {title}
    </MenuDropdownChildContainer>
  );
};

export default MenuDropdownChild;
