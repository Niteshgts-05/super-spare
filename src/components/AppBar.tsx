import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter hook
import SideDrawer from "./SideDrawer";
import CategoryFilter from "@/components/CategoryFilter";
import BikeModelFilter from "@/components/BikeModelFilter";
import BackwardIcon from "@/icons/Backward";
import MenuIcon from "@/icons/Menu";
import ForwardIcon from "@/icons/Forward";

const AppBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <button onClick={() => router.back()} className="text-gray-500">
        <div className="w-8 h-8 relative">
          <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full shadow" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute">
            <BackwardIcon />
          </div>
        </div>
      </button>
      <button onClick={toggleDrawer} className="text-gray-500">
        <div className="w-9 h-9 relative">
          <div className="w-9 h-9 left-0 top-0 absolute bg-neutral-950 rounded-full" />
          <div className="w-[12.96px] h-[11.52px] left-[11.52px] top-[12.24px] absolute">
            <MenuIcon />
          </div>
        </div>
      </button>
      <SideDrawer isOpen={isDrawerOpen} onClose={handleCloseDrawer}>
        <div className="text-slate-950 text-xl font-bold font-poppins capitalize leading-[25px]">
          Select Filters
        </div>
        <div className="flex-1 overflow-y-auto">
          <CategoryFilter name="Spare Brands" />
          <CategoryFilter name="Size" />
          <CategoryFilter name="Bike OEM" />
          <BikeModelFilter name="Bike Models" />
        </div>
        <div
          className="bg-white w-full  py-4 px-6"
          style={{ marginBottom: "2rem" }}
        >
          <button className="w-full h-[50px] px-4 py-2.5 bg-slate-950 rounded-xl justify-center items-center gap-3 inline-flex">
            <div className="text-center text-white text-xl font-bold font-poppins">
              Next
            </div>
            <div className="w-6 h-6 relative">
              <ForwardIcon />
            </div>
          </button>
        </div>
      </SideDrawer>
    </>
  );
};

export default AppBar;
