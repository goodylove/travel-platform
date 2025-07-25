import React from "react";
import { serviceData } from "../constants/dummy-data";
import ServiceCard from "./common/ServicesCard";

interface ServicesListProps {
  setFlightModal: React.Dispatch<React.SetStateAction<boolean>>;
  setHotelModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActivateModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServicesList: React.FC<ServicesListProps> = ({
  setFlightModal,
  setHotelModal,
  setActivateModal,
}) => (
  <div className="flex md:flex-row flex-col space-x-1 ">
    {serviceData.map((service) => {
      let onClick;

      if (service.name === "Flights") {
        onClick = () => {
          setFlightModal(true);
        };
      } else if (service.name === "Hotels") {
        onClick = () => {
          setHotelModal(true);
        };
      } else {
        onClick = () => {
          setActivateModal(true);
        };
      }

      return (
        <ServiceCard
          key={service.name}
          name={service.name}
          description={service.description}
          onClick={onClick}
        />
      );
    })}
  </div>
);

export default ServicesList;
