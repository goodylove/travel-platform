import React from "react";
import type { IconType } from "react-icons";

interface SidebarItemProps {
  Icon: IconType;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, label }) => (
  <div
    className={`flex  text-base font-medium  font-poppins items-center space-x-3 cursor-pointer group hover:text-[#1D2433] transition-colors`}
  >
    <Icon
      className={`icon group-hover:text-[#1D2433] transition-colors text-[#647995]`}
      size={30}
    />
    <span className="font-medium text-[#647995] group-hover:text-[#1D2433]">
      {label}
    </span>
  </div>
);

export default SidebarItem;
