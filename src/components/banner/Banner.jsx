import React from "react";
import Nav from "../shared/nav/Nav";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
import vector from "../../assets/banner/vector.png"

const Banner = () => {
  return (
    <div class="main-container py-8 lg:h-[750px] bg-gradient-to-r from-pink-100 via-white to-blue-100">
    
      <div className="flex items-center pt-24">
        <div className="lg:w-7/12">
          <BannerLeft />
        </div>
        <div className="lg:w-5/12">
          <BannerRight />
        </div>
      </div>
      {/* <img src={vector} alt="" className="w-full lg:h-[210px] absolute bottom-0 -z-10"/> */}
    </div>
  );
};

export default Banner;
