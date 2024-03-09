import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const links = ["RollApps", "Dymension", "IBC Bridge", "Liquidity", "Info"];
  return (
    <div className="grid grid-cols-3  p-3">
      <div className="lg:flex hidden items-center gap-5">
        <img src={logo} alt="logo" />
        {links?.map((item, index) => (
          <span className="text-[#f1e1d4]  text-sm" key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className="flex items-center lg:col-span-1 col-span-2 justify-center">
        <input
          className="bg-[#312C2C] lg:w-80 w-full border border-gray-600 text-sm rounded text-white px-4 py-2"
          placeholder="Search RoolApps"
        />
      </div>
      <div className="text-end">
        <button className="bg-[#f1e1d4] px-3 py-2 rounded-md font-semibold">
          Connect
        </button>
      </div>
    </div>
  );
};

export default Navbar;
