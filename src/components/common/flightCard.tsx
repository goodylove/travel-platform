import React from "react";
import Button from "./Button";
import {
  PiUsb,
  PiFilmSlateBold,
  PiForkKnifeBold,
  PiSuitcaseRolling,
} from "react-icons/pi";
import Delete from "./Delete";
import DetailsBtn from "./DetailsBtn";

function FlightCard() {
  return (
    <div className="bg-white rounded-sm   shadow-md space-y-4 w-full flex md:flex-row flex-col">
      <div className="flex-1 pt-3 px-2 space-y-5">
        <div className=" flex flex-col gap-4 lg:space-x-2 xl:space-x-8 md:flex-row md:items-center md:justify-between px-2 xl:px-3">
          {/* Airline Info */}
          <div className="flex items-center gap-2 min-w-[160px]">
            <img
              src="/svg/american_airlines_symbol.svg.svg"
              alt="symbol"
              className="w-6 h-6"
            />
            <div>
              <h3 className="text-[#1D2433] text-sm md:text-base xl:text-lg font-poppins font-semibold">
                American Airlines
              </h3>
              <div className="flex items-center font-poppins justify-center space-x-1 lg:space-x-2">
                <span className="font-medium text-sm text-[#676E7E]">
                  AA-829 .
                </span>
                <Button className="text-white max-w-fit w-full p-1 text-xs bg-[#0A369D]">
                  First Class
                </Button>
              </div>
            </div>
          </div>
          {/* Flight Details */}
          <div className="flex flex-col md:flex-row md:items-center gap-4  flex-1">
            {/* Departure */}
            <div className="flex flex-col items-center">
              <p className="text-[#1D2433] text-xs lg:text-sm xl:text-2xl font-poppins font-semibold">
                08:35
              </p>
              <p className="text-[#676E7E] font-poppins font-medium text-xs xl:text-sm">
                Sun, 20 Aug
              </p>
            </div>
            {/* Duration & Route */}
            <div className="xl:space-y-1 flex-1">
              <div className="flex items-center justify-between space-x-4 xl:space-x-10">
                <img
                  src="/svg/AirplaneTakeoff.svg"
                  alt="symbol"
                  className="w-6 h-6"
                />
                <span className="font-poppins text-[#676E7E] font-medium text-xs xl:text-sm">
                  Duration:1h45m
                </span>
                <img
                  src="/svg/AirplaneLanding.svg"
                  alt="symbol"
                  className="w-6 h-6"
                />
              </div>
              <div className="rounded-full w-full h-2 bg-[#E7F0FF] relative">
                <div className="absolute bg-[#0D6EFD] left-[30%] top-0 w-2/5 h-full rounded-2xl"></div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#1D2433] font-poppins font-semibold">Los</p>
                <span className="font-poppins text-[#676E7E] font-medium text-sm">
                  Direct
                </span>
                <p className="text-[#1D2433] font-poppins font-semibold">SIN</p>
              </div>
            </div>
            {/* Arrival */}
            <div className="flex flex-col items-center">
              <p className="text-[#1D2433] text-xs lg:text-sm xl:text-2xl font-poppins font-semibold">
                09:55
              </p>
              <p className="text-[#676E7E] font-poppins font-medium text-xs xl:text-sm">
                Sun, 20 Aug
              </p>
            </div>
          </div>
          {/* Price */}
          <div className="flex items-center space-x-1 min-w-[100px] justify-end">
            <span>&#8358;</span>
            <span className="xl:text-base text-sm font-semibold font-poppins text-[#1D2433]">
              123,450.00
            </span>
          </div>
        </div>
        {/* second */}

        <div className="text-xs  py-3 xl:py-4 text-[#647995] font-medium flex flex-wrap items-center gap-x-4 gap-y-2 px-1 xl:px-3 font-poppins border-y border-[#E4E7EC]">
          <span className="mr-2">Facilities:</span>
          <div className="flex items-center gap-x-2">
            <PiSuitcaseRolling />
            <span>Baggage:20kg, Cabin Baggage: 8kg</span>
          </div>
          <div className="flex items-center gap-x-2">
            <PiFilmSlateBold />
            <span>In flight entertainment</span>
          </div>
          <div className="flex items-center gap-x-2">
            <PiForkKnifeBold />
            <span>In flight meal</span>
          </div>
          <div className="flex items-center gap-x-2">
            <PiUsb />
            <span>USB Port</span>
          </div>
        </div>
        <DetailsBtn
          leftButtons={[
            {
              label: "Flight details",
              onClick: () => {},
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

      {/* third */}
      <Delete />
    </div>
  );
}

export default FlightCard;
