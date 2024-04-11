import { get } from "@/utils/axios";

const fetchAllProducts = async () => {
  try {
    return await get<any>(`catalog/products`);
  } catch {
    return null;
  }
};

export default fetchAllProducts;
