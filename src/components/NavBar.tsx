import React from "react";
import NavBarItem from "./common/NavItem";
import Button from "./common/Button";
import { GoHome } from "react-icons/go";
import {
  PiCaretDownLight,
  PiListChecksBold,
  PiPlusSquare,
  PiBasket,
  PiBell,
  PiHandCoins,
  PiWallet,
  PiChartPieSlice,
} from "react-icons/pi";
import { HiMenu } from "react-icons/hi";

function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-sm fixed top-0 z-50 w-full right-0 h-20 ">
      <div className="w-full px-3 xl:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center lg:space-x-2 xl:space-x-4">
          <img
            src="/svg/navSvg/logo.svg"
            alt=""
            className="w-[42px] h-[40px]"
          />

          <div
            className="hidden  w-80 items-center gap-2 bg-[#F0F2F5] py-2 px-4 rounded-sm lg:flex 
             hover:bg-white hover:shadow-md hover:ring-1 hover:ring-[#0D6EFD] 
             transition-all duration-200 ease-in-out cursor-pointer"
          >
            <img src="/svg/navSvg/search.svg" alt="" className="w-[15px]" />
            <input
              type="search"
              placeholder="Search"
              className="outline-none font-poppins bg-transparent placeholder-gray-500"
            />
          </div>
        </div>
        {/* second section */}
        <div className=" hidden lg:flex items-center lg:space-x-3 xl:space-x-4">
          {/* first left */}
          <div className="flex items-center lg:space-x-2 xl:space-x-4 ">
            <NavBarItem Icons={GoHome} label="Home" />
            <NavBarItem Icons={PiChartPieSlice} label="Dashboard" />
            <NavBarItem Icons={PiWallet} label="Wallet" />
            <NavBarItem
              Icons={PiListChecksBold}
              label="Plan a trip"
              active={true}
            />
            <NavBarItem Icons={PiHandCoins} label="Commission for life" />
          </div>
          {/* second left */}
          <div className=" h-[45px] border-l border-[#98A2B3]" />
          <div className="flex items-center lg:space-x-3 xl:space-x-4">
            <Button className="text-[#FFFFFF] bg-[#0D6EFD]">Subscribe</Button>
            <NavBarItem Icons={PiBell} label="Notifications" />
            <NavBarItem Icons={PiBasket} label="Carts" />
            <NavBarItem Icons={PiPlusSquare} label="Create" />
          </div>
          <div className="flex items-center lg:space-x-2 xl:space-x-3">
            <img src="/svg/navSvg/profile.svg" alt="" className="w-8 h-8" />

            <PiCaretDownLight size={18} />
          </div>
        </div>
        {/* mobile nav button */}
        <button
          className="flex lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <HiMenu size={25} />
        </button>
      </div>
      {/* mobile nav */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col p-6 space-y-6`}
      >
        <button
          className="self-end mb-4 text-2xl"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <NavBarItem Icons={GoHome} label="Home" />
        <NavBarItem Icons={PiChartPieSlice} label="Dashboard" />
        <NavBarItem Icons={PiWallet} label="Wallet" />
        <NavBarItem
          Icons={PiListChecksBold}
          label="Plan a trip"
          active={true}
        />
        <NavBarItem Icons={PiHandCoins} label="Commission for life" />
        <div className="border-t pt-4 space-y-4">
          <Button className="w-full text-[#FFFFFF] bg-[#0D6EFD]">
            Subscribe
          </Button>
          <NavBarItem Icons={PiBell} label="Notifications" />
          <NavBarItem Icons={PiBasket} label="Carts" />
          <NavBarItem Icons={PiPlusSquare} label="Create" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
