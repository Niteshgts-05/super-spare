import Image from "next/image";
import { useRouter } from "next/router";
import { SubCategory } from "@/models/SubCategory";
import { capitalizeWords } from "@/utils/helpers/string";

interface Props {
  subCategory: SubCategory;
}

export const SubCategoryCard = ({ subCategory }: Props) => {
  const { push } = useRouter();
  const { name, image_url } = subCategory;

  return (
    <article
      className="w-full"
      onClick={() => push(`/products/${subCategory.id}`)}
    >
      <div className="bg-[#EDEFF2] min-w-full min-h-[60px] h-[60px] mb-1 rounded-[12px] relative">
        {image_url ? (
          <Image
            src={image_url}
            alt={name}
            fill={true}
            className="object-contain"
          />
        ) : null}
      </div>
      <div className="text-[#060818] text-center font-normal text-[12px] leading-4">
        {capitalizeWords(name)}
      </div>
    </article>
  );
};
