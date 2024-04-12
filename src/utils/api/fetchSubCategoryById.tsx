import { get } from "@/utils/axios";

export const debounce = (func: Function, delay: number) => {
  let timerId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), delay);
  };
};

export const fetchSubCategoryById = async (id: number, page: number) => {
  try {
    return await get<any>(`catalog/products/subcategory/${id}/?page=${page}`);
  } catch {
    return null;
  }
};
