import React from "react";
import { PiWarehouseBold } from "react-icons/pi";
import Title from "./common/Title";
import HotelCard from "./common/HotelCard";

function Hotel() {
  return (
    <div className="mt-3 xl:p-4 p-3 bg-[#344054]">
      <Title
        buttonColor="bg-[#FFFFFF]"
        buttonTextColor="text-[#1D2433]"
        title="Hotels"
        Icon={PiWarehouseBold}
      />
      <HotelCard />
    </div>
  );
}

export default Hotel;
