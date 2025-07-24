import React from "react";
import type { IconType } from "react-icons";
interface NavBarItemProps {
  Icons: IconType;
  label: string;
  active?: boolean;
}

const NavBarItem: React.FC<NavBarItemProps> = ({ Icons, label, active }) => (
  <a
    href="#"
    className={` group  items-center cursor-pointer flex space-x-2 lg:block hover:text-[#1D2433] `}
  >
    <Icons
      size={24}
      className={` transition-colors lg:mx-auto   ${
        active ? "text-[#1D2433]" : "text-[#647995]"
      } group-hover:text-[#1D2433]`}
    />
    <span
      className={` leading-[24px] font-poppins font-medium lg:text-[10px] xl:text-xs  group-hover:brightness-0  ${
        active ? "text-[#1D2433]" : "text-[#647995] "
      }`}
    >
      {label}
    </span>
  </a>
);

export default NavBarItem;
