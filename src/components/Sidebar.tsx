import {
  PiAirplaneTilt,
  PiBuildings,
  PiCaretUpDown,
  PiFirstAidKit,
  PiNewspaperClipping,
  PiPackage,
  PiRoadHorizonLight,
  PiStudent,
  PiSuitcaseRolling,
} from "react-icons/pi";
import SidebarItem from "./common/siderbarItem";

function Sidebar() {
  return (
    <div className=" transform transition-transform duration-300 w-full h-full flex justify-between flex-col   bg-white shadow-md rounded-sm   pt-6   ">
      <div className="flex flex-col space-y-5 mt-4 px-9">
        <SidebarItem Icon={PiRoadHorizonLight} label="Activities" />
        <SidebarItem Icon={PiBuildings} label="Hotels" />
        <SidebarItem Icon={PiAirplaneTilt} label="Flights" />
        <SidebarItem Icon={PiStudent} label="Study" />
        <SidebarItem Icon={PiNewspaperClipping} label="Visa" />
        <SidebarItem Icon={PiSuitcaseRolling} label="Immigration" />
        <SidebarItem Icon={PiFirstAidKit} label="Medical" />
        <SidebarItem Icon={PiPackage} label=" Vacation Packages" />
      </div>
      <div className=" px-4">
        <div className=" bg-[#F0F2F5] w-full mb-10">
          <div className="flex items-center justify-between  space-x-3   xl:px-4 py-3 rounded-sm">
            <div className="py-2 px-2 text-white rounded-[4px] font-poppins font-medium bg-[#0D6EFD]">
              Go
            </div>
            <span className="font-poppins  text-sm lg:leading-[24px]  font-medium text-[#647995]">
              Personal Account
            </span>
            <div>
              <PiCaretUpDown
                className="text-[#647995] cursor-pointer"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
