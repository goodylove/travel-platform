import React from "react";
import Button from "./Button";

interface EmptyStateProps {
  icon: string;
  message: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  className?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  message,
  buttonLabel,
  onButtonClick,
  className = "",
}) => (
  <div
    className={`flex  bg-white rounded-sm flex-col items-center justify-center py-10 space-y-4 ${className}`}
  >
    <img src={icon} alt="empty" />
    <span className="font-poppins text-[#647995] text-base font-medium">
      {message}
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
