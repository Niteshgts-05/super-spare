import { get } from "@/utils/axios";

const fetchAllCategories = async () => {
  try {
    return await get<any>("/catalog/subcategories/");
  } catch {
    return null;
  }
};

export default fetchAllCategories;
