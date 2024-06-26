import SideBarDropdown from "./SiderBarDropdown";
import {
  SideBarContainer,
  SideBarCorpText,
  SideBarVersion,
  SideBarVersionWrap,
  SideBarWrap,
} from "./style";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarWrap>
        <SideBarDropdown />
        <SideBarVersionWrap>
          <SideBarVersion>version: 6.0.0</SideBarVersion>
          <SideBarCorpText>ⓒ B1ND Team Corp.</SideBarCorpText>
        </SideBarVersionWrap>
      </SideBarWrap>
    </SideBarContainer>
  );
};

export default SideBar;
