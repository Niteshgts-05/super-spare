import { useEffect, useState } from "react";
import fetchAllSubCategories from "@/utils/api/fetchAllSubCategories";
import { SubCategoryGroup } from "@/models/SubCategory";
import { SubCategoryCard } from "./SubCategoryCard";

const SubCategories = () => {
  const [subCategoriesGroup, setSubCategoriesGroup] = useState<
    SubCategoryGroup[]
  >([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetchAllSubCategories();
      if (response) {
        setSubCategoriesGroup(response.results);
      }
    };

    getData();
  }, []);

  return (
    <section className="flex flex-col gap-5">
      {subCategoriesGroup.map(({ name, subcategories }, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="text-[#627087] font-bold leading-4">{name}</div>
          <div className="grid grid-cols-4 justify-between w-full flex-wrap gap-5">
            {subcategories.map((subCategory) => (
              <SubCategoryCard key={subCategory.id} subCategory={subCategory} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default SubCategories;
