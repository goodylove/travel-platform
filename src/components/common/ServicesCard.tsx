import React from "react";
import Button from "./Button";

interface ServiceCardProps {
  name: string;
  description: string;
  onClick: () => void;
}

const getStyles = (name: string) => {
  switch (name) {
    case "Activities":
      return "bg-[#000031] text-white";
    case "Hotels":
      return "bg-[#E7F0FF] text-[#000000]";
    case "Flights":
      return "bg-[#0D6EFD] text-white";
    default:
      return "bg-white text-black";
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  name,
  description,

  onClick,
}) => {
  return (
    <div
      className={`rounded-sm  lg:w-64 md:w-fit w-full flex flex-col space-y-3 py-3 px-2 shadow-md ${getStyles(
        name
      )}`}
    >
      <h3 className="font-semibold font-poppins  ">{name}</h3>
      <p className="text-xs font-normal font-poppins xl:leading-[22px]">
        {description}
      </p>
      <Button
        onClick={onClick}
        className={`w-full mt-3 text-sm  font-medium xl:leading-[22px] font-poppins border-none  ${
          name === "Flights"
            ? "bg-[#FFFFFF] text-[#0D6EFD] "
            : " bg-[#0D6EFD] text-[#FFFFFF]"
        }`}
      >
        Add {name}
      </Button>
    </div>
  );
};

export default ServiceCard;
