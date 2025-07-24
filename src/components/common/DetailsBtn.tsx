import React from "react";
import Button from "./Button";

interface DetailsBtnProps {
  leftButtons: { label: string; onClick?: () => void }[];
  rightButton: { label: string; onClick?: () => void };
}

const DetailsBtn: React.FC<DetailsBtnProps> = ({
  leftButtons,
  rightButton,
}) => (
  <div className="flex xl:items-center xl:justify-between flex-col md:flex-row gap-2">
    <div className="flex gap-2">
      {leftButtons.map((btn, idx) => (
        <Button
          key={btn.label + idx}
          className="border-none text-[#0D6EFD] font-poppins font-medium text-sm xl:text-lg xl:leading-[26px]"
          onClick={btn.onClick}
        >
          {btn.label}
        </Button>
      ))}
    </div>
    <Button
      className="border-none self-start text-[#0D6EFD] font-poppins font-medium text-sm xl:text-lg xl:leading-[26px]"
      onClick={rightButton.onClick}
    >
      {rightButton.label}
    </Button>
  </div>
);

export default DetailsBtn;
