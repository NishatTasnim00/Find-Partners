import React from "react";
import Nav from "../shared/nav/Nav";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";

const Banner = () => {
  return (
    <div class="main-container py-8 lg:h-[803px] bg-gradient-to-r from-pink-100 via-white to-blue-100">
      <Nav />
      <div className="flex items-center pt-14">
        <div className="lg:w-7/12">
          <BannerLeft />
        </div>
        <div className="lg:w-5/12">
          <BannerRight />
        </div>
      </div>
    </div>
  );
};

export default Banner;
