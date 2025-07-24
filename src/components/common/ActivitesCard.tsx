import {
  PiMapPinBold,
  PiStarFill,
  PiBedFill,
  PiCaretCircleDown,
  PiCaretCircleUp,
} from "react-icons/pi";
import DetailsBtn from "./DetailsBtn";
import Delete from "./Delete";
import Button from "./Button";
export default function ActivitiesCard() {
  return (
    <div className="flex md:flex-row flex-col">
      <div className=" flex-1 bg-white rounded-t-sm rounded-l-sm rounded-r-none p-1 lg:p-2 xl:p-3 w-full">
        <div className="flex flex-col md:flex-row md:space-x-2 xl:space-x-4 w-full">
          <img
            src="/svg/2.svg"
            alt="hotel"
            className="w-full md:w-[160px] xl:w-[200px] object-cover rounded-sm mb-3 md:mb-0"
          />

          <div className="flex-1 space-y-5">
            {/* 1 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="text-[#000000] text-xl font-poppins font-semibold">
                  The Museum of Modern Art
                </p>
                <p className="text-[#1D2433] text-sm xl:text-sm font-poppins font-medium">
                  Works from Van Gogh to Warhol & beyond plus a sculpture
                  garden, 2 cafes & The modern restaurant
                </p>
                <div className="font-medium flex flex-wrap gap-3 mt-2">
                  <div className="text-[#0D6EFD] flex items-center space-x-1">
                    <PiMapPinBold />
                    <span className="font-poppins font-medium">Directions</span>
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
                <span className="text-[#1D2433] text-nowrap font-poppins font-normal text-xs">
                  10:30 AM on Mar 19
                </span>
              </div>
            </div>
            <div className="text-xs py-3 mt-2 text-[#647995] font-medium flex flex-wrap justify-between items-center gap-x-2 gap-y-2 font-poppins border-y border-[#E4E7EC]">
              <div className="flex flex-wrap items-center gap-x-2">
                <span className="">What's Included:</span>

                <span>Admission to the Empire State Building</span>

                <span className="text-[#0D6EFD] pl-3">See more</span>
              </div>
              <div className="flex flex-wrap items-end text-right gap-x-2 mt-2 md:mt-0">
                <Button className="bg-[#0A369D]  text-[#FFFFFF] rounded-sm">
                  Day 1
                </Button>
                <div className="flex flex-col items-center text-base space-y-2 text-[#98A2B3]">
                  <PiCaretCircleUp />
                  <PiCaretCircleDown />
                </div>
              </div>
            </div>
            <DetailsBtn
              leftButtons={[
                {
                  label: "Activity details",
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
