import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  PiCalendarBlankBold,
  PiDotsThreeBold,
  PiGearSixBold,
  PiUserPlusBold,
} from "react-icons/pi";
import Profile from "../assets/image/1.png";
function TripHeader() {
  return (
    <div className="flex md:items-center md:justify-between md:flex-row  flex-col mt-5 space-y-2 ">
      {/* left */}
      <div>
        <div className="flex items-center text-xs  font-poppins justify-center w-fit space-x-1 bg-[#FEF4E6] text-[#7A4504]  px-1.5 py-1.5 rounded-sm">
          <PiCalendarBlankBold />
          <span className="text-[#7A4504]  font-medium ">21 March 2024</span>
          <div className="">
            <FaArrowRight />
          </div>
          <span className="text-[#7A4504]  font-medium ">21 April 2024</span>
        </div>
        <p className="text-[#000000] font-poppins font-semibold  text-lg lg:text-2xl lg:leading-[32px] mt-1 ">
          Bahamas Family Trip
        </p>

        <span className=" md:text-sm text-xs font-poppins font-medium lg:leading-[24px]  text-[#676E7E]">
          New York, United States of America{" "}
          <span className=" text-[#676E7E] text-xs  lg:leading-[24px] font-poppins font-medium">
            |
          </span>{" "}
          Solo Trip
        </span>
      </div>
      {/* right */}
      <div className=" flex md:flex-col flex-row gap-4 space-y-3 ">
        <div className="flex items-center space-x-2 ">
          <div className="flex py-3 px-15  items-center justify-center bg-[#E7F0FF] rounded-sm hover:bg-[#D0E1FF] transition-colors duration-300 cursor-pointer">
            <PiUserPlusBold className="text-[#0D6EFD]" />
          </div>
          <PiDotsThreeBold />
        </div>
        <div className=" flex items-center justify-start md:justify-center ">
          <img
            src={Profile}
            alt="avatar"
            className="w-10 h-10 rounded-full z-10 -mr-2 cursor-pointer"
          />

          <div className="h-[2px] bg-[#E7F0FF] w-12 z-0"></div>

          <div className="flex items-center cursor-pointer justify-center w-10 h-10 rounded-full border-2 border-[#E7F0FF] bg-white z-10 -ml-2">
            <PiGearSixBold
              size={20}
              className="text-[#344054]  hover:text-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripHeader;
