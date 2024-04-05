import { Category } from "@/models/Category";
import { CategoryCard } from "./CategoryCard";

interface AllCategoriesProps {
  categories: Category[];
}

const Categories = ({ categories }: AllCategoriesProps) => {
  return (
    <section>
      <div className="grid grid-cols-3 justify-between w-full flex-wrap gap-5">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
