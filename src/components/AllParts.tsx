import SubCategories from "./SubCategories";

const AllParts = () => {
  return (
    <section className="my-5 px-2">
      {/* <div className="flex justify-between items-center h6 mb-2">
        <div className="text-[#627087] text-base font-semibold">All Parts</div>
        <Link
          href="/search"
          className="text-[#627087] text-xs font-semibold h-[18px]"
        >
          View All
        </Link>
      </div> */}
      <SubCategories />
    </section>
  );
};

export default AllParts;
