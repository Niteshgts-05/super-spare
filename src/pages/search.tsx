import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";
import SubCategories from "@/components/SubCategories";
import OemBrands from "@/components/OemBrands";
import SearchResults from "@/components/SearchResults";

const Search = () => {
  const [searchedText, setSearchedText] = useState<string>("");

  return (
    <main>
      <SearchBar
        searchedText={searchedText}
        setSearchedText={setSearchedText}
      />
      <section className="px-4 pb-4">
        {searchedText.length < 4 ? (
          <>
            <SubCategories />
            <OemBrands />
          </>
        ) : (
          <SearchResults />
        )}
      </section>
    </main>
  );
};

export default Search;
