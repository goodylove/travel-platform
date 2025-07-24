import React from "react";
import { serviceData } from "../constants/dummy-data";
import ServiceCard from "./common/ServicesCard";

const ServicesList: React.FC = () => (
  <div className="flex  md:flex-row flex-col space-x-1  mt-4 ">
    {serviceData.map((service) => (
      <ServiceCard
        key={service.name}
        name={service.name}
        description={service.description}
      />
    ))}
  </div>
);

export default ServicesList;
