import { useState } from "react";
import Link from "next/link";
import { Category } from "@/models/Category";
import Categories from "./Categories";

const DUMMY_CATEGORIES: Category[] = [
  {
    id: 1,
    title: "Spark Plug",
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
  {
    id: 2,
    title: "Clutch plate",
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
  {
    id: 3,
    title: "BOSCH Spark Plug",
    image:
      "https://s3-alpha-sig.figma.com/img/e272/6718/372d9d486304915229e0cf0eec954a74?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jD4J03-vgEuanQCgBTAvJyCVaG~stc0Gm-ldusIQqwAYfVyQrK5ZbLxPUljSLCHRyF0z37xmzhuEExNrpyWaMrnur05vD2eABX0MD~caBLfeaa2Oqh3hpJJUk1nf4kkFro9Y9oXjPTasa5YMBuAvy-XzU7dBagYJwtw0bvVjGAAA17Paebi62d93mKuYZgw6tVi9tVxoT8DjSew7qaW5~6c2TQFvx3Ofr0oCFsFbenYS40zXHei9L1PvdLkBwp9e68t63-~GiA-ujdx~sDv1QIPc2ThNJPZ6UQOwXbmE5EQlA9W7cPy9XDsVL48z8DlM~aFdFCw5gKM4MAaJ~R67hQ__",
  },
  {
    id: 4,
    title: "BOSCH Spark Plug",
    image:
      "https://s3-alpha-sig.figma.com/img/a0e1/823a/e9ccdabb58812d8ce0592f20658111aa?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLioaWZ~KA-n1T3rbn7dhjf9hbF4ANch2uRqB7ugwHTcOo7ecs5NmD8unOIMQvQRs1JhqPtTMzn-DlWxNeI1g8j2h8JS6J8cju~u0FQkxmuGVeFm5wiv8dUtOEeBNEU~s9wE9WBtNUzW~g4st-HXGLeT591aeYf0cODqhI~VuZxCcMv8hU77LhFZ-xUuN19BtOuR2jIw--0llVKg~Yj481Kvpdy5EGExb8tHmOzWChQPrsT7GpeRWWWG69wyOZTZSR7BggYYez~tXEdMGR~LPkvwApzklw6IgfN2Gyvvm5I4gK3L4W0AKmVjGfQW6hm6XUlzE~uzD7RBLEzCJ4czFw__",
  },
];

const AllParts = () => {
  return (
    <section className="my-5 px-2">
      <div className="flex justify-between items-center h6 mb-2">
        <div className="text-[#627087] text-base font-semibold">All Parts</div>
        <Link
          href="/search"
          className="text-[#627087] text-xs font-semibold h-[18px]"
        >
          View All
        </Link>
      </div>
      <Categories categories={[...DUMMY_CATEGORIES]} />
    </section>
  );
};

export default AllParts;
