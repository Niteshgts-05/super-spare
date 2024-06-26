import Link from "next/link";
import { Product } from "@/models/Product";
import { ProductCard } from "./ProductCard";

const DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "ASK Brake Shoes",
    name: "Honda Activa New",
    unitPrice: 0,
    priceOfFive: 0,
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
  {
    id: 2,
    title: "BOSCH Spark Plug",
    name: "Choti Chudi",
    unitPrice: 200,
    priceOfFive: 1000,
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
  {
    id: 3,
    title: "BOSCH Spark Plug",
    name: "Choti Chudi",
    unitPrice: 200,
    priceOfFive: 1000,
    image:
      "https://s3-alpha-sig.figma.com/img/e272/6718/372d9d486304915229e0cf0eec954a74?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jD4J03-vgEuanQCgBTAvJyCVaG~stc0Gm-ldusIQqwAYfVyQrK5ZbLxPUljSLCHRyF0z37xmzhuEExNrpyWaMrnur05vD2eABX0MD~caBLfeaa2Oqh3hpJJUk1nf4kkFro9Y9oXjPTasa5YMBuAvy-XzU7dBagYJwtw0bvVjGAAA17Paebi62d93mKuYZgw6tVi9tVxoT8DjSew7qaW5~6c2TQFvx3Ofr0oCFsFbenYS40zXHei9L1PvdLkBwp9e68t63-~GiA-ujdx~sDv1QIPc2ThNJPZ6UQOwXbmE5EQlA9W7cPy9XDsVL48z8DlM~aFdFCw5gKM4MAaJ~R67hQ__",
  },
  {
    id: 4,
    title: "BOSCH Spark Plug",
    name: "Choti Chudi",
    unitPrice: 200,
    priceOfFive: 1000,
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
];

const HotDeals = () => {
  return (
    <section className="my-5">
      <div className="flex justify-between items-center h6 mx-2 mb-2">
        <div className="text-[#627087] text-base font-semibold">Hot Deals</div>
        {/* <Link href="" className="text-[#627087] text-xs font-semibold h-[18px]">
          View All
        </Link> */}
      </div>
      <div className="flex flex-sb w-full overflow-x-scroll scrollbar-hide">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default HotDeals;
