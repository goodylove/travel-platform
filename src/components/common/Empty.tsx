import React from "react";
import Button from "./Button";

interface EmptyStateProps {
  icon: string;

  buttonLabel: string;
  onButtonClick?: () => void;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,

  buttonLabel,
  onButtonClick,
  className = "",
}) => (
  <div
    className={`flex  bg-white rounded-sm flex-col items-center justify-center py-10 space-y-4 ${className}`}
  >
    <img src={icon} alt="empty" />
    <span className="font-poppins text-[#1D2433] text-base font-medium">
      No Request yet
    </span>
    <Button
      onClick={onButtonClick}
      className="bg-[#0D6EFD] text-white rounded-sm px-6 py-2"
    >
      {buttonLabel}
    </Button>
  </div>
);

export default EmptyState;
