import { get } from "@/utils/axios";
import ApiResponse from "@/models/ApiResponse";
import { SubCategoryGroup } from "@/models/SubCategory";

const fetchAllSubCategories = async () => {
  try {
    return await get<ApiResponse<SubCategoryGroup>>(
      "/catalog/subcategories/views"
    );
  } catch {
    return null;
  }
};

export default fetchAllSubCategories;
