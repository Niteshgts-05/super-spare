import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { debounce } from "@/utils/api/fetchSubCategoryById";

interface PaginationProps<T> {
  fetchSubCategoryById: (id: number, page: number) => Promise<any>;
}

const usePagination = <T,>({ fetchSubCategoryById }: PaginationProps<T>) => {
  const router = useRouter();
  const { id } = router.query;

  const bottomBoundaryRef = useRef<HTMLDivElement>(null);

  const [productData, setProductData] = useState<T[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  const fetchData = async (id: number, page: number) => {
    const response = await fetchSubCategoryById(id, page);
    setPageCount(response?.count);
    setProductData(response?.results);
  };

  const fetchMoreData = async () => {
    const response = await fetchSubCategoryById(Number(id), page + 1);
    setProductData((prevData) => [...prevData, ...response?.results]);
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (id) {
      fetchData(Number(id), page);
    }
  }, [id]);

  const fetchMoreDataDebounced = debounce(fetchMoreData, 1000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && Math.ceil(pageCount) / 10 > page) {
          fetchMoreDataDebounced();
        }
      },
      { threshold: 1 }
    );
    if (bottomBoundaryRef.current) {
      observer.observe(bottomBoundaryRef.current);
    }
    return () => {
      if (bottomBoundaryRef.current) {
        observer.unobserve(bottomBoundaryRef.current);
      }
    };
  }, [page, pageCount, id]);

  return { productData, pageCount, page, setPage, bottomBoundaryRef };
};

export default usePagination;
