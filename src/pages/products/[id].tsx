import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import Motorcycle from "../icons/Motorcycle";
const DUMMY_DATA = [
  {
    image: "https://dummyimage.com/x.png/ff4444/ffffff",
    alt: "Gallardo",
    bike_name: "Lamborghini",
    bike_model: "rio",
    size: 6.1,
    price: 222,
    cut_price: 740,
    unit_price: 589,
  },
  {
    image: "https://dummyimage.com/x.png/ff4444/ffffff",
    alt: "Frontier",
    bike_name: "Nissan",
    bike_model: "RAV4",
    size: 4.7,
    price: 345,
    cut_price: 268,
    unit_price: 605,
  },
  {
    image: "https://dummyimage.com/x.png/5fa2dd/ffffff",
    alt: "7 Series",
    bike_name: "BMW",
    bike_model: "Explorer",
    size: 6.1,
    price: 398,
    cut_price: 818,
    unit_price: 758,
  },
  {
    image: "https://dummyimage.com/x.png/dddddd/000000",
    alt: "Defender",
    bike_name: "Land Rover",
    bike_model: "Impreza",
    size: 6.6,
    price: 445,
    cut_price: 77,
    unit_price: 204,
  },
  {
    image: "https://dummyimage.com/x.png/cc0000/ffffff",
    alt: "Viper RT/10",
    bike_name: "Dodge",
    bike_model: "Laser",
    size: 4.8,
    price: 462,
    cut_price: 445,
    unit_price: 936,
  },
  {
    image: "https://dummyimage.com/x.png/5fa2dd/ffffff",
    alt: "E150",
    bike_name: "Ford",
    bike_model: "Caravan",
    size: 2.3,
    price: 149,
    cut_price: 913,
    unit_price: 410,
  },
  {
    image: "https://dummyimage.com/x.png/5fa2dd/ffffff",
    alt: "Century",
    bike_name: "Buick",
    bike_model: "E-Class",
    size: 2.4,
    price: 414,
    cut_price: 965,
    unit_price: 194,
  },
  {
    image: "https://dummyimage.com/x.png/ff4444/ffffff",
    alt: "F350",
    bike_name: "Ford",
    bike_model: "3 Series",
    size: 4.5,
    price: 385,
    cut_price: 230,
    unit_price: 804,
  },
  {
    image: "https://dummyimage.com/x.png/cc0000/ffffff",
    alt: "Focus",
    bike_name: "Ford",
    bike_model: "Z8",
    size: 6.3,
    price: 101,
    cut_price: 573,
    unit_price: 315,
  },
  {
    image: "https://dummyimage.com/x.png/dddddd/000000",
    alt: "Sorento",
    bike_name: "Kia",
    bike_model: "Protege",
    size: 3.0,
    price: 430,
    cut_price: 780,
    unit_price: 821,
  },
];
const ProductPage = () => {
  return (
    <div>
      <div className="fixed bg-white top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center bg-white py-4 px-4">
          <AppBar />
        </div>
        <div className="px-4 text-slate-950 text-xl font-bold font-['Poppins'] capitalize leading-[25px]">
          Piston Assembly
        </div>
        <div className="px-4 bg-white w-full absolute justify-start items-center gap-1 inline-flex">
          <div className="text-slate-500 text-xs font-normal font-['Poppins'] capitalize leading-[25px]">
            10 results
          </div>
        </div>
      </div>
      {/* Product */}
      <div className="pt-20 flex flex-wrap" style={{ marginTop: "3.75rem" }}>
        {DUMMY_DATA.map((data, index) => (
          <div
            key={index}
            className="mb-2 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-green-100 rounded-lg overflow-hidden"
          >
            <div
              className="w-[328px] h-[202px] md:w-[450px] md:h-[300px] relative"
              style={{ overflow: "hidden" }}
            >
              <div className="left-[8px] top-[8px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                  <div className="w-[18px] h-[18px] relative">
                    <Motorcycle />
                  </div>
                  <div className="text-slate-950 text-[15px] font-medium font-['Poppins'] capitalize">
                    {data.bike_name}
                  </div>
                </div>
                <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                  <div className="w-[18px] h-[18px] relative">
                    <Motorcycle />
                  </div>
                  <div className="text-slate-950 text-[15px] font-medium font-['Poppins'] capitalize">
                    {data.bike_model}
                  </div>
                </div>
              </div>
              <div className="px-3 py-[1px] left-[242px] top-[8px] absolute bg-white rounded-[20px] justify-center items-center gap-1 inline-flex">
                <div className="text-center text-slate-950 text-[15px] font-medium font-['Poppins']">
                  {data.size}mm
                </div>
              </div>
              <img
                className="w-44 h-[194px] md:w-64 md:h-[250px] left-[152px] top-[52px] absolute"
                src="/image 73.png"
              />
            </div>
            <div className="flex justify-between flex-row bg-white py-2 w-[100%] h-[100px] md:w-[450px] md:h-[100px]">
              <div className="w-40 h-[77px] flex-col justify-start items-start gap-px inline-flex ml-3">
                <div className="text-slate-950 text-sm font-normal font-['Poppins'] capitalize leading-[21px]">
                  ₹{data.size}/unit
                </div>
                <div className="text-slate-950 text-base font-normal font-['Poppins'] line-through capitalize leading-normal">
                  ₹{data.cut_price}/5 piece
                </div>
                <div className="text-slate-950 text-xl font-bold font-['Poppins'] capitalize">
                  ₹{data.unit_price}/5 units
                </div>
              </div>
              <div className="w-[140px] h-[67px] relative">
                <div className="w-[135.48px] h-[63px] left-[4.52px] top-[4px] absolute rounded-xl border border-slate-950" />
                <div className="w-[135.48px] h-[63px] left-0 top-0 absolute bg-slate-950 rounded-[9px]" />
                <div className="left-[13.77px] top-[24px] absolute text-center text-white text-xl font-bold font-['Poppins']">
                  Order Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
