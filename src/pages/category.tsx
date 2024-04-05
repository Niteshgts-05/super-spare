import React, { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";
const Category = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="bg-green-100 h-screen flex flex-col items-center">
      <div className="mt-4"></div>
      <div className="text-center">
        <h1 className="text-2xl text-slate-950 font-bold font-['Poppins']">
          Piston Assembly
        </h1>
        <img
          src="/image 63.png"
          alt="Your Image"
          className="mx-auto w-35 h-35 rounded-full mb-4"
        />
      </div>
      <div
        className="bg-white w-full h-screen rounded-tr-lg rounded-tl-lg shadow-lg  mt-[-50]"
        style={{ marginTop: "-50px" }}
      >
        <CategoryFilter name="Spare Brand" />
        <CategoryFilter name="Size" />
        <CategoryFilter name="Bike OEM" />
      </div>
      <div className="bg-white w-full shadow-lg py-4 px-6 flex justify-center">
        <button
          className={`${
            checked === true ? "bg-slate-950" : "bg-slate-300"
          }    w-[17.688rem] h-[3.125rem] px-4 py-2.5 text-white font-bold text-xl font-bold font-['Poppins'] rounded-xl`}
          onClick={() => alert("clicked")}
          disabled={!checked}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Category;
