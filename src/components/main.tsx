import Banner from "../assets/image/banner.png";

import { FaArrowLeft } from "react-icons/fa";
import TripHeader from "./tripHeader";
import ServicesList from "./Services";
import Hotel from "./Hotels";
import Activities from "./Activite";
import { useState } from "react";
import FlightComponent from "./flight";

function MainLayout() {
  const [flightModal, setFlightModal] = useState(false);
  const [hotelModal, setHotelModal] = useState(false);
  const [activateModal, setActivateModal] = useState(false);

  return (
    <div className="py-6 xl:px-8  px-3 w-full bg-white">
      <div className="relative ">
        <img src={Banner} className="w-full " />
        <div className=" absolute top-[0.4px] left-[0.4px]  md:top-8 md:left-8 rounded-sm self-start flex items-center justify-center w-fit p-3 group bg-[#FFFFFF33] z-10 hover:bg-[#FFFFFF66] ">
          <FaArrowLeft className="text-[#344054] text-lg  group-hover:text-[#1D2433] hover:text-[#1D2433] transition-colors duration-300 cursor-pointer" />
        </div>
      </div>
      <TripHeader />
      <ServicesList
        setFlightModal={setFlightModal}
        setActivateModal={setActivateModal}
        setHotelModal={setHotelModal}
      />
      <div className=" mt-16 ">
        <p className="text-[#1D2433] font-poppins font-semibold text-xl ">
          Trip itineraries
        </p>
        <span className="text-[#647995] font-poppins  font-medium text-sm ">
          Your trip itineraries are placed here
        </span>
      </div>
      <FlightComponent
        flightModal={flightModal}
        setFlightModal={setFlightModal}
      />
      <Hotel hotelModal={hotelModal} setHotelModal={setHotelModal} />
      <Activities
        activateModal={activateModal}
        setActivateModal={setActivateModal}
      />
    </div>
  );
}

export default MainLayout;
