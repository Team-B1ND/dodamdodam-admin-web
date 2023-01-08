import { SearchBarContainer, SearchBarIcon, SearchBarInput } from "./style";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { SearchBarProps } from "./SearchBar.type";

const SearchBar = ({ value, onChange, onSubmit }: SearchBarProps) => {
  return (
    <SearchBarContainer
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <SearchBarIcon>
        <AiOutlineSearch />
      </SearchBarIcon>
      <SearchBarInput
        placeholder="검색어 입력 후 Enter key를 누르세요"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
