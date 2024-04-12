import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { SearchResult } from "@/models/SearchResult";
import Drawer from "./common/Drawer";
import ProductDetail from "./ProductDetail";

const DUMMY_SEARCH_RESULTS: SearchResult[] = [
  {
    id: 1,
    title: "Clutch plate",
    type: "brand",
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
  {
    id: 2,
    title: "BOSCH Spark Plug",
    type: "brand",
    image:
      "https://s3-alpha-sig.figma.com/img/e272/6718/372d9d486304915229e0cf0eec954a74?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jD4J03-vgEuanQCgBTAvJyCVaG~stc0Gm-ldusIQqwAYfVyQrK5ZbLxPUljSLCHRyF0z37xmzhuEExNrpyWaMrnur05vD2eABX0MD~caBLfeaa2Oqh3hpJJUk1nf4kkFro9Y9oXjPTasa5YMBuAvy-XzU7dBagYJwtw0bvVjGAAA17Paebi62d93mKuYZgw6tVi9tVxoT8DjSew7qaW5~6c2TQFvx3Ofr0oCFsFbenYS40zXHei9L1PvdLkBwp9e68t63-~GiA-ujdx~sDv1QIPc2ThNJPZ6UQOwXbmE5EQlA9W7cPy9XDsVL48z8DlM~aFdFCw5gKM4MAaJ~R67hQ__",
  },
  {
    id: 3,
    title: "BOSCH Spark Plug",
    type: "brand",
    image:
      "https://s3-alpha-sig.figma.com/img/624d/cd3b/7d4d759b03859504c336647f45893652?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-CirSB0qg5jibXO8Yg7bjF4bDGCmfYT7Qdiig6sgx2GBQp2CC7-Ots8LVwHXxFsXDU~qnnF9SBiqXx4WAMEDX4SwKZIKdWKDutSGoU4NbkvkT~8p6XiOdHJP-3s~BsckTr34JmPEEYeOUzHDYNsk2bkks-BEUIxHWXBCKCvyg2yjf~T987ZHLOaToQjVW9NvR9TPgZEHcAg7Nr~zni6O6eNe~Mh4RTo33bRc-88kQEC6D9Blh36r4RduxpPT0ANm9mSkdCMR4hpdfMOBjfALkKOHiwQoi5OpHOisdchfonLOcg60YJ9qJ9T1U1DRz5-sjlcVvSOIRLNBF0yOJ7K8A__",
  },
  {
    id: 4,
    title: "Spark Plug",
    type: "product",
    saving: 10,
    image:
      "https://s3-alpha-sig.figma.com/img/624d/cd3b/7d4d759b03859504c336647f45893652?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-CirSB0qg5jibXO8Yg7bjF4bDGCmfYT7Qdiig6sgx2GBQp2CC7-Ots8LVwHXxFsXDU~qnnF9SBiqXx4WAMEDX4SwKZIKdWKDutSGoU4NbkvkT~8p6XiOdHJP-3s~BsckTr34JmPEEYeOUzHDYNsk2bkks-BEUIxHWXBCKCvyg2yjf~T987ZHLOaToQjVW9NvR9TPgZEHcAg7Nr~zni6O6eNe~Mh4RTo33bRc-88kQEC6D9Blh36r4RduxpPT0ANm9mSkdCMR4hpdfMOBjfALkKOHiwQoi5OpHOisdchfonLOcg60YJ9qJ9T1U1DRz5-sjlcVvSOIRLNBF0yOJ7K8A__",
  },
];

const SearchResults = () => {
  const { push } = useRouter();

  const [selectedProduct, setSelectedProduct] = useState<SearchResult | null>(
    null
  );

  const openDrawer = (brand: SearchResult) => setSelectedProduct(brand);

  const closeDrawer = () => setSelectedProduct(null);

  return (
    <>
      {DUMMY_SEARCH_RESULTS.map((brand) => (
        <div
          key={brand.id}
          onClick={() => {
            brand.type === "product"
              ? openDrawer(brand)
              : push(`/products/${brand.id}`);
          }}
          className="flex items-center gap-2"
        >
          <div className="h-[62px] min-h-[62px] w-[56px] min-w-[56px] relative rounded-[12px] relative">
            <Image
              src={brand.image}
              alt={brand.image}
              fill={true}
              className="object-contain"
            />
          </div>
          <div className="truncate flex-1 text-[#000] font-normal text-sm">
            {brand.title}
          </div>
        </div>
      ))}
      {selectedProduct ? (
        <Drawer closeDrawer={closeDrawer} title={selectedProduct.title}>
          <ProductDetail product={selectedProduct} />
        </Drawer>
      ) : null}
    </>
  );
};

export default SearchResults;
