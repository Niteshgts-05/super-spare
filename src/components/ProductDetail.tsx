import Image from "next/image";
import { SearchResult } from "@/models/SearchResult";

interface AttributeProps {
  name: string;
  value: string;
}

const Attribute = ({ name, value }: AttributeProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="text-[#627087] font-bold text-[14px] leading-[16px]">
        {name}
      </div>
      <div className="truncate text-[#060818] font-bold text-[14px] leading-[20px]">
        {value}
      </div>
    </div>
  );
};

interface Props {
  product: SearchResult;
}

const ProductDetail = ({ product }: Props) => {
  return (
    <section className="w-full flex flex-col items-center px-4 pb-3 gap-5">
      <div className="bg-[#02a44f] text-[14px] text-white font-bold max-w-max p-[6px] rounded-[4px] leading-[10px]">
        Saving {product.saving}%
      </div>
      <div className="bg-[#e6f5e8] w-full h-[250px] relative">
        <Image src={product.image} alt={product.image} layout="fill" />
      </div>
      <Attribute name="Product name" value={product.title} />
      <Attribute name="Part brand" value={product.title} />
      <Attribute name="Size" value={product.title} />
    </section>
  );
};

export default ProductDetail;
