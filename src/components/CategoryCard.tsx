import Image from "next/image";
import { Category } from "@/models/Category";

interface Props {
  category: Category;
}

export const CategoryCard = ({ category }: Props) => {
  const { title, image } = category;

  return (
    <article className="w-[100px] min-w-[100px]">
      <div className="bg-[#EDEFF2] min-w-full min-h-[100px] mb-1 rounded-[12px] relative">
        <Image src={image} alt={image} fill={true} className="object-contain" />
      </div>
      <div className="text-[#000] capitalize text-center font-normal text-3 leading-4">
        {title}
      </div>
    </article>
  );
};
