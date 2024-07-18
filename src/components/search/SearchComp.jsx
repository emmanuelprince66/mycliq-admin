import React from "react";
import searchNotFound from "../../assets/images/admin/searchNotFound.png";
import SearchFound from "./SearchFound";

const SearchComp = ({ searchTerm }) => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <p className="font-[500] text-[#1e1e1e text-[20px] ">Search Result</p>

      {/* search not found start */}

      {searchTerm === "" && (
        <div className="w-full h-full flex gap-3 flex-col text-center justify-center items-center">
          <img src={searchNotFound} alt="search-img" />

          <p className="font-[600] text-[16px] text-[#1e1e1e]">
            No Matches Found for your Search!
          </p>
          <p className="font-[400] text-[16px] text-[#828282]">
            Check that the keyword you searched was spelt correctly, or try a
            different keyword.
          </p>
        </div>
      )}
      {/* search not found ends */}

      {/* search found */}
      <SearchFound />
      {/* search found ends */}
    </div>
  );
};

export default SearchComp;
