import React from "react";
import Button from "./Button";
import type { IconType } from "react-icons";

interface TitleProps {
  buttonColor?: string;
  buttonTextColor?: string;
  title: string;
  Icon: IconType;
}

function Title({
  buttonColor = "bg-[#0D6EFD]",
  buttonTextColor = "text-white",
  title,
  Icon,
}: TitleProps) {
  return (
    <div className="flex items-center justify-between mb-4">
      <div
        className={`flex items-center space-x-1.5 ${
          title == "Flights" ? "text-[#1D2433]" : "text-[#FFFFFF]"
        } `}
      >
        <Icon size={24} />

        <span className=" font-poppins font-semibold text-sm lg:text-base xl:text-lg">
          {title}
        </span>
      </div>
      <Button
        className={` font-poppins  hover:brightness-110 transition-colors duration-200 border-none ${buttonColor} ${buttonTextColor} `}
      >
        Add {title}
      </Button>
    </div>
  );
}

export default Title;
