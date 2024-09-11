import MenuDropdownChild from "../../MenuDropdown/MenuDropdownChild";
import MenuDropdownWrapper from "../../MenuDropdown/MenuDropdownWrapper";
import MenuItem from "../../MenuItem";
import { SideBarDropdownContainer } from "./style";

const SideBarDropdown = () => {
  return (
    <SideBarDropdownContainer>
      <MenuItem title="구성원" redirectUrl="/member" />
      <MenuItem title="전화번호 관리" redirectUrl="/phone" />
      <MenuItem title="가입승인" redirectUrl="/joinApproval" />
      <MenuDropdownWrapper title="서비스 설정">
        <MenuDropdownChild title="서비스 권한" redirectUrl="/authority" />
        <MenuDropdownChild title="전화번호 설정" redirectUrl="/numberSetting" />
      </MenuDropdownWrapper>
    </SideBarDropdownContainer>
  );
};

export default SideBarDropdown;
