import React from "react";
import {
  PiMapPinBold,
  PiStarFill,
  PiBedFill,
  PiSwimmingPoolBold,
  PiWineBold,
  PiCalendarBlankBold,
} from "react-icons/pi";
import DetailsBtn from "./DetailsBtn";
import Delete from "./Delete";

function HotelCard() {
  return (
    <div className="flex md:flex-row flex-col">
      <div className=" flex-1 bg-white  rounded-t-sm rounded-l-sm rounded-r-none p-1 lg:p-2 xl:p-3 w-full">
        <div className="flex flex-col md:flex-row md:space-x-2 xl:space-x-4 w-full">
          {/* img */}
          <img
            src="/svg/3.svg"
            alt="hotel"
            className="w-full md:w-[160px] xl:w-[200px] object-cover rounded-sm mb-3 md:mb-0"
          />

          <div className="flex-1 space-y-5">
            {/* 1 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-[#000000] text-xl font-poppins font-semibold">
                  Riviera Resort, Lekki
                </p>
                <p className="text-[#1D2433] font-poppins text-sm xl:text-sm font-medium">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                  Lekki Phase1
                </p>
                <div className="font-medium flex flex-wrap gap-3 mt-2">
                  <div className="text-[#0D6EFD] flex items-center space-x-1">
                    <PiMapPinBold />
                    <span className="font-poppins font-medium">
                      Show in map
                    </span>
                  </div>
                  <div className="text-[#676E7E] flex items-center space-x-1">
                    <PiStarFill className="text-amber-300" />
                    <span>8.5 (436)</span>
                  </div>
                  <div className="text-[#676E7E] flex items-center space-x-1">
                    <PiBedFill size={20} />
                    <span>King size room</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end text-right mt-3 md:mt-0">
                <div className="flex items-center space-x-1 min-w-[100px]">
                  <span>&#8358;</span>
                  <span className="xl:text-base text-sm font-semibold font-poppins text-[#1D2433]">
                    123,450.00
                  </span>
                </div>
                <p className="text-[#1D2433] font-poppins font-medium text-sm">
                  Total Price: NGN 560,000
                </p>
                <p className="text-[#1D2433] font-poppins font-medium text-sm">
                  1 room x 10 nights incl. taxes
                </p>
              </div>
            </div>
            <div className="text-xs py-3 mt-2 text-[#647995] font-medium flex flex-wrap justify-between items-center gap-x-4 gap-y-2 font-poppins border-y border-[#E4E7EC]">
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="mr-2">Facilities:</span>
                <div className="flex items-center gap-x-2">
                  <PiSwimmingPoolBold />
                  <span>Pool</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <PiWineBold />
                  <span>Bar</span>
                </div>
              </div>
              <div className="flex flex-wrap items-end text-right gap-x-2 mt-2 md:mt-0">
                <div className="flex items-center gap-x-2">
                  <PiCalendarBlankBold />
                  <span>Check In: 20-04-2024</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <PiCalendarBlankBold />
                  <span>Check Out: 29-04-2024</span>
                </div>
              </div>
            </div>
            <DetailsBtn
              leftButtons={[
                {
                  label: "Hotel details",
                },
                {
                  label: "Price details",
                },
              ]}
              rightButton={{
                label: "Edit details",
              }}
            />
          </div>
        </div>
      </div>
      <Delete />
    </div>
  );
}

export default HotelCard;
