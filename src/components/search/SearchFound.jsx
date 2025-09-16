import React from "react";
import avatar from "../../assets/avatar.svg";
import rider from "../../assets/images/admin/rider.svg";

const SearchFound = () => {
  return (
    <div className="w-full mt-6 flex flex-col items-start gap-4">
      <p className="font-[600] text-[20px] text-[#1e1e1e] ">
        7 matches found for “Olosunde”.
      </p>

      <div className="flex flex-col items-start gap-2 w-full mt-5 mb-5">
        <p className="font-[600] text-[16px]  text-[#1e1e1e]">customers</p>

        <div className="flex gap-3 items-center mb-2">
          <img src={avatar} alt="avatar" />
          <p className="text-[16px] text-[#828282]">Oluwa Oluwa</p>
        </div>
        <div className="flex gap-3 items-center mb-2">
          <img src={avatar} alt="avatar" />
          <p className="text-[16px] text-[#828282]">Oluwa Oluwa</p>
        </div>
        <div className="flex gap-3 items-center mb-2">
          <img src={avatar} alt="avatar" />
          <p className="text-[16px] text-[#828282]">Oluwa Oluwa</p>
        </div>
        <div className="flex gap-3 items-center mb-2">
          <img src={avatar} alt="avatar" />
          <p className="text-[16px] text-[#828282]">Oluwa Oluwa</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 w-full mt-5">
        <p className="font-[600] text-[16px]  text-[#1e1e1e]">
          Logistics(Rider)
        </p>

        <div className="flex gap-3 items-center mb-2">
          <img src={rider} alt="rider" />
          <p className="text-[16px] text-[#828282]">Oluwa Oluwababtope</p>
        </div>
      </div>
    </div>
  );
};

export default SearchFound;
