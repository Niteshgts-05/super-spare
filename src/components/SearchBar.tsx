import { ChangeEvent, FunctionComponent } from "react";
import SearchIcon from "@/icons/Search";

interface SearchBarProps {
  searchedText: string;
  setSearchedText?: (val: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchedText,
  setSearchedText,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchedText?.(value);
  };

  return (
    <section className="flex gap-3 pl-[10px] pr-[16px] mt-2 mb-5">
      <div className="flex flex-1 items-center gap-1 px-4 py-3 bg-[#F3F5F8] rounded-[50px]">
        <SearchIcon />
        <input
          className="bg-transparent h-5 flex-1 outline-none font-bold placeholder:font-normal"
          value={searchedText}
          onChange={handleInputChange}
          placeholder={"Search for parts"}
        />
      </div>
    </section>
  );
};

export default SearchBar;
