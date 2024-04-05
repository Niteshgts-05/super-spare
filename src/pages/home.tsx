import React from "react";
import BannerSlider from "@/components/BannerSlider";
import HotDeals from "@/components/HotDeals";
import AllParts from "@/components/AllParts";

const Home = () => {
  return (
    <main className="pt-2">
      <BannerSlider />
      <HotDeals />
      <AllParts />
    </main>
  );
};

export default Home;
