import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-slate-200 py-5 px-7 flex items-center justify-between">
      <h1 className="text-[25px] font-semibold">
        MAHFUZ RP - <span className="text-red-500">MRP</span>
      </h1>
      {/* <Autocomplete> */}
      <div>
        <div className="flex items-center gap-5">
          <input
            placeholder="Search"
            className="border-1 py-1 px-3 rounded-[4px] shadow-lg border-slate-300 focus:border-none outline-none"
          />
          <span>
            <IoMenu size={30} />
          </span>
        </div>
      </div>
      {/* </Autocomplete> */}
    </div>
  );
};

export default Header;
