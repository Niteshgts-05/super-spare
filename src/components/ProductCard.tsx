import Image from "next/image";
import { Product } from "@/models/Product";
import ForwardIcon from "@/icons/Forward";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { title, name, unitPrice, priceOfFive, image } = product;
  return (
    <article className="relative bg-[#DAECD5] min-w-[198px] w-[198px] p-2 rounded-[20px] mr-2 first:ml-2 flex flex-col items-center">
      <div className="text-[#000] w-max max-w-full truncate font-extrabold text-sm capitalize mb-1">
        {title}
      </div>
      <div className="bg-white w-max max-w-full truncate text-black text-opacity-80 px-3 py-[9px] rounded-[30px] mb-2">
        {name}
      </div>
      <div className="h-[135px] w-full relative mb-2">
        <Image src={image} alt={image} layout="fill" />
      </div>
      <div
        className="flex flex-row items-center justify-between p-1 bottom-2 w-full
                  bg-[linear-gradient(200deg,_rgba(255,_255,_255,_0.60)_27.23%,_rgba(255,_255,_255,_0.37)_96.87%)] 
                  backdrop-blur-[14px] truncate text-black text-opacity-80 border-white border-[1px] rounded-[10px]"
      >
        <div className="flex flex-col justify-between">
          <div className="truncate text-xs font-normal">₹{unitPrice}/piece</div>
          <div className="truncate max-w-[125px] text-[#060818] text-[17px] font-bold">
            ₹{priceOfFive}/5 piece
          </div>
        </div>
        <button className="bg-[#060818] text-[#F3F5F8] px-[7px] py-[11px] rounded-[8px]">
          <ForwardIcon />
        </button>
      </div>
    </article>
  );
};
