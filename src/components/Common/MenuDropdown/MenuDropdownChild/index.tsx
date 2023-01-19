import { useNavigate } from "react-router-dom";
import { MenuDropdownChildProps } from "./MenuDropdownChild.type";
import { MenuDropdownChildContainer } from "./style";

const MenuDropdownChild = ({ title, redirectUrl }: MenuDropdownChildProps) => {
  const navigate = useNavigate();

  return (
    <MenuDropdownChildContainer onClick={() => navigate(redirectUrl)}>
      {title}
    </MenuDropdownChildContainer>
  );
};

export default MenuDropdownChild;
