import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import SideDrawer from "@/components/SideDrawer";
import CategoryFilter from "@/components/CategoryFilter";
import BikeModelFilter from "@/components/BikeModelFilter";
import MotorcycleIcon from "@/icons/Motorcycle";
import FilterIcon from "@/icons/Filter";
import BackwardIcon from "@/icons/Backward";
import ForwardIcon from "@/icons/Forward";
import { fetchSubCategoryById } from "@/utils/api/fetchSubCategoryById";
import usePagination from "@/hooks/usePagination";
import { SubCategoryByGroup } from "@/models/SubCategoryGroup";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { productData, pageCount, bottomBoundaryRef } =
    usePagination<SubCategoryByGroup>({
      fetchSubCategoryById,
    });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="fixed bg-white top-0 left-0 w-full z-50">
        <div className="bg-white text-slate-950 text-xl font-bold font-poppins capitalize leading-[25px] py-4 px-4 mt-10 mb-2">
          Piston Assembly
        </div>
        <div className="w-[360px] h-[90px] left-0 top-0 absolute" />
        <div className="left-[16px] top-[77px] absolute justify-start items-center gap-1 inline-flex">
          <div className="text-slate-500 text-xs font-normal font-poppins capitalize leading-[25px]">
            {pageCount} results
          </div>
        </div>
        <div
          className="w-8 h-8 left-[16px] top-[12px] absolute"
          onClick={() => router.back()}
        >
          <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full shadow" />
          <div className="w-5 h-5 left-[6px] top-[6px] absolute">
            <BackwardIcon />
          </div>
        </div>
        <div
          onClick={toggleDrawer}
          className="px-3 py-1 right-4 top-[53px] absolute bg-neutral-950 rounded-[38px] flex-col justify-start items-start gap-1 inline-flex"
        >
          <div className="justify-end items-center gap-1 inline-flex">
            <div className="w-6 h-6 relative">
              <FilterIcon />
            </div>
            <div className="text-right text-white text-xs font-semibold font-poppins">
              Filter
            </div>
          </div>
        </div>
      </div>
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
      <div className="flex flex-wrap mt-28 justify-center">
        {productData && productData.length === 0 && (
          <h2>No matching product found</h2>
        )}
        {productData?.map((product, index) => (
          <div
            key={index}
            className="mb-2 w-full h-[296px] md:w-[450px] md:h-[300px] mx-4 my-2 overflow-hidden flex flex-col justify-between relative"
          >
            <div className="w-full h-[202px] md:w-[450px] md:h-[300px] bg-green-100 rounded-[20px] relative overflow-hidden">
              <div className="left-[8px] top-[8px] absolute flex-col justify-start items-start gap-1 inline-flex">
                {product.product_name && (
                  <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                    <div className="w-[18px] h-[18px] relative">
                      <MotorcycleIcon />
                    </div>
                    <div className="text-slate-950 text-[15px] font-medium font-poppins capitalize">
                      {product.product_name.length > 10
                        ? `${product.product_name.substring(0, 16)}...`
                        : product.product_name}
                    </div>
                  </div>
                )}
                {product.subcategory.name && (
                  <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                    <div className="w-[18px] h-[18px] relative">
                      <MotorcycleIcon />
                    </div>
                    <div className="text-slate-950 text-[15px] font-medium font-poppins capitalize">
                      {product.subcategory.name}
                    </div>
                  </div>
                )}
                {product.subcategory.name && (
                  <div className="h-7 px-3 py-[9px] bg-white rounded-[30px] justify-center items-center gap-1 inline-flex">
                    <div className="w-[18px] h-[18px] relative">
                      <MotorcycleIcon />
                    </div>
                    <div className="text-slate-950 text-[15px] font-medium font-poppins capitalize">
                      {product.subcategory.name}
                    </div>
                  </div>
                )}
              </div>
              {product?.size && (
                <div className="px-3 py-[1px] right-2 top-[8px] absolute bg-white rounded-[20px] justify-center items-center gap-1 inline-flex">
                  <div className="text-center text-slate-950 text-[15px] font-medium font-poppins">
                    {product.size}
                  </div>
                </div>
              )}
              {product.subcategory.image_url && (
                <Image
                  src={product.subcategory.image_url}
                  alt={product.subcategory.name}
                  width={176}
                  height={194}
                  className="right-0 top-[52px] absolute"
                />
              )}
            </div>
            <div className="flex justify-between flex-row bg-white py-2 w-full md:w-[450px] md:h-[100px]">
              <div className="w-40 h-[77px] flex-col justify-start items-start gap-px inline-flex ml-3">
                <div className="text-slate-950 text-sm font-normal font-poppins capitalize leading-[21px]">
                  ₹10/unit
                </div>
                <div className="text-slate-950 text-base font-normal font-poppins line-through capitalize leading-normal">
                  ₹100/5 piece
                </div>
                <div className="text-slate-950 text-xl font-bold font-poppins capitalize">
                  ₹120/5 units
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
      <div ref={bottomBoundaryRef} style={{ height: "10px" }} />
    </>
  );
};

export default ProductPage;
