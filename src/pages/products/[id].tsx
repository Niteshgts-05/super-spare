import React, { useState } from "react";
import AppBar from "@/components/AppBar";
import Image from "next/image";
import MotorcycleIcon from "@/icons/Motorcycle";

const DUMMY_DATA = [
  {
    image: "/image_73.png",
    alt: "Gallardo",
    bike_name: "Lamborghini",
    bike_model: "rio",
    size: 6.1,
    price: 222,
    cut_price: 740,
    unit_price: 589,
  },
  {
    image: "/image_73.png",
    alt: "Frontier",
    bike_name: "Nissan",
    bike_model: "Splendor 13S 100CC",
    size: 4.7,
    price: 345,
    cut_price: 268,
    unit_price: 605,
  },
  {
    image: "/image_73.png",
    alt: "7 Series",
    bike_name: "BMW",
    bike_model: "Explorer",
    size: 6.1,
    price: 398,
    cut_price: 818,
    unit_price: 758,
  },
  {
    image: "/image_73.png",
    alt: "Defender",
    bike_name: "Land Rover",
    bike_model: "Impreza",
    size: 6.6,
    price: 445,
    cut_price: 77,
    unit_price: 204,
  },
  {
    image: "/image_73.png",
    alt: "Viper RT/10",
    bike_name: "Dodge",
    bike_model: "Laser",
    size: 4.8,
    price: 462,
    cut_price: 445,
    unit_price: 936,
  },
  {
    image: "/image_73.png",
    alt: "E150",
    bike_name: "Ford",
    bike_model: "Caravan",
    size: 2.3,
    price: 149,
    cut_price: 913,
    unit_price: 410,
  },
  {
    image: "/image_73.png",
    alt: "Century",
    bike_name: "Buick",
    bike_model: "E-Class",
    size: 2.4,
    price: 414,
    cut_price: 965,
    unit_price: 194,
  },
  {
    image: "/image_73.png",
    alt: "F350",
    bike_name: "Ford",
    bike_model: "3 Series",
    size: 4.5,
    price: 385,
    cut_price: 230,
    unit_price: 804,
  },
  {
    image: "/image_73.png",
    alt: "Focus",
    bike_name: "Ford",
    bike_model: "Z8",
    size: 6.3,
    price: 101,
    cut_price: 573,
    unit_price: 315,
  },
  {
    image: "/image_73.png",
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
        <div className="px-4 text-slate-950 text-xl font-bold font-poppins capitalize leading-[25px]">
          Piston Assembly
        </div>
        <div className="px-4 bg-white w-full absolute justify-start items-center gap-1 inline-flex">
          <div className="text-slate-500 text-xs font-normal font-poppins capitalize leading-[25px]">
            10 results
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-32 justify-center">
        {DUMMY_DATA.map((data, index) => (
          <div
            key={index}
            className="mb-2 w-full h-[296px] md:w-[450px] md:h-[300px] mx-4 my-2 overflow-hidden flex flex-col justify-between relative"
          >
            <div className="w-full h-[202px] md:w-[450px] md:h-[300px] bg-green-100 rounded-[20px] relative overflow-hidden">
              <div className="left-[8px] top-[8px] absolute flex-col justify-start items-start gap-1 inline-flex">
                <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                  <div className="w-[18px] h-[18px] relative">
                    <MotorcycleIcon />
                  </div>
                  <div className="text-slate-950 text-[15px] font-medium font-poppins capitalize">
                    {data.bike_name}
                  </div>
                </div>
                <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                  <div className="w-[18px] h-[18px] relative">
                    <MotorcycleIcon />
                  </div>
                  <div className="text-slate-950 text-[15px] font-medium font-poppins capitalize">
                    {data.bike_model}
                  </div>
                </div>
                <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                  <div className="w-[18px] h-[18px] relative">
                    <MotorcycleIcon />
                  </div>
                  <div className="text-slate-950 text-[15px] font-medium font-poppins capitalize">
                    {data.bike_model}
                  </div>
                </div>
              </div>
              <div className="px-3 py-[1px] right-2 top-[8px] absolute bg-white rounded-[20px] justify-center items-center gap-1 inline-flex">
                <div className="text-center text-slate-950 text-[15px] font-medium font-poppins">
                  {data.size}mm
                </div>
              </div>
              <Image
                src={data.image}
                alt={data.alt}
                width={176}
                height={194}
                className="right-0 top-[52px] absolute"
              />
            </div>
            <div className="flex justify-between flex-row bg-white py-2 w-full md:w-[450px] md:h-[100px]">
              <div className="w-40 h-[77px] flex-col justify-start items-start gap-px inline-flex ml-3">
                <div className="text-slate-950 text-sm font-normal font-poppins capitalize leading-[21px]">
                  ₹{data.size}/unit
                </div>
                <div className="text-slate-950 text-base font-normal font-poppins line-through capitalize leading-normal">
                  ₹{data.cut_price}/5 piece
                </div>
                <div className="text-slate-950 text-xl font-bold font-poppins capitalize">
                  ₹{data.unit_price}/5 units
                </div>
              </div>
              <div className="w-[140px] h-[67px] relative">
                <div className="w-[135.48px] h-[63px] left-[4.52px] top-[4px] absolute rounded-xl border border-slate-950" />
                <div className="w-[135.48px] h-[63px] left-0 top-0 absolute bg-slate-950 rounded-[9px]" />
                <button className="left-[2.77px] top-[16px] absolute inset-x-0 text-center text-white text-xl font-bold font-poppins">
                  Order Now
                </button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-b border-dotted border-gray-400"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
