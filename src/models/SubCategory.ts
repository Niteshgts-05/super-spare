export interface SubCategory {
  id: number;
  name: string;
  image_url: string;
}

export interface SubCategoryGroup {
  name: string;
  subcategories: SubCategory[];
}
