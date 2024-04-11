interface Category {
  id: number;
  name: string;
}

interface Subcategory {
  id: number;
  name: string;
  category: Category;
  image_url: string;
}

export interface SubCategoryByGroup {
  sku: string;
  product_id: string;
  product_name: string;
  category: Category;
  subcategory: Subcategory;
  size: string;
  material: string | null;
  color: string | null;
  tags: string[] | null;
}
